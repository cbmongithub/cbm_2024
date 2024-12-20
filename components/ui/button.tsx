import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { forwardRef } from "react";

import { cn } from "lib/helpers";
import type { ButtonProps } from "types";

const Variant = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-offset-2 transition active:transition-none bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50 active:bg-neutral-700 active:text-neutral-50/70",
        secondary: "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-offset-2 transition active:transition-none bg-neutral-900/75 text-neutral-300 hover:bg-neutral-800/75 hover:text-neutral-100 active:bg-neutral-700/50 active:text-neutral-100/70",
        tertiary: "group cursor-pointer mb-8 flex size-10 items-center justify-center transition border border-neutral-800/50 bg-neutral-950 hover:border-neutral-800 hover:ring-neutral-100 active:border-neutral-700 active:ring-neutral-50",
        ghost: "group cursor-pointer hover:bg-neutral-900 hover:text-white active:bg-neutral-900 active:text-neutral-100 transition-opacity",
        link: "group cursor-pointer text-blue-500 underline-offset-4 hover:text-blue-600 hover:underline active:text-blue-700 visited:text-blue-400 transition-opacity",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps<typeof Variant>>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(Variant({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, Variant }
