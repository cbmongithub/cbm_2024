import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "lib/helpers";
import { forwardRef } from "react";

import type { ButtonProps } from "types";

const Variant = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent text-sm font-medium transition-colors transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium outline-offset-2 transition active:transition-none bg-neutral-900 text-neutral-100 hover:bg-neutral-800 hover:text-neutral-50 active:bg-neutral-700 active:text-neutral-200",
        secondary:
          "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium outline-offset-2 transition active:transition-none border-neutral-800/60 bg-neutral-950/40 text-neutral-200 hover:border-neutral-700 hover:text-neutral-50 active:bg-neutral-900/70",
        tertiary:
          "group cursor-pointer mb-6 flex size-10 items-center justify-center rounded-full border border-neutral-800/60 bg-neutral-950 transition hover:border-neutral-700 hover:text-neutral-100 active:border-neutral-600 active:bg-neutral-900",
        ghost:
          "group cursor-pointer px-3 py-2 text-neutral-300 hover:bg-neutral-900/60 hover:text-neutral-100 active:text-neutral-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps<typeof Variant>>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(Variant({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, Variant };
