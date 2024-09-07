FROM oven/bun:1 as base
WORKDIR /usr/src/app

# Install dependencies into temp directory
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install production dependencies
FROM base AS prod
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules and build
FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# Prepare final image
FROM base AS final
COPY --from=prod /temp/prod/node_modules node_modules
COPY --from=build /usr/src/app/bun.lockb .
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/.vinxi .vinxi
COPY --from=build /usr/src/app/.output .output

# Run the application
USER bun
EXPOSE 3000
CMD ["bun", "run", "start"]
