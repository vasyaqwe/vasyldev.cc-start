import * as React from "react"
import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"

const cardVariants = cva(
   `border bg-muted border-border/60 text-muted-foreground p-3 rounded-2xl`,
   {
      variants: {
         variant: {
            default: ``,
            inverted: `bg-background border-border/60 text-foreground`,
         },
      },
      defaultVariants: {
         variant: "default",
      },
   },
)

export interface CardProps
   extends React.ButtonHTMLAttributes<HTMLDivElement>,
      VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
   ({ className, variant, ...props }, ref) => (
      <div
         ref={ref}
         className={cn(cardVariants({ variant, className }))}
         {...props}
      />
   ),
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
   />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
   <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
   />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
   <p
      ref={ref}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
   />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
   />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
   />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
