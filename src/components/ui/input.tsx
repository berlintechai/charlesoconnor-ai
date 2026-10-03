import * as React from "react";

import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-md border bg-background px-3 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-primary";

function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(fieldBase, "h-11", className)}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldBase, "min-h-28 resize-y py-2.5", className)}
      {...props}
    />
  );
}

function NativeSelect({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="native-select"
      className={cn(fieldBase, "h-11", className)}
      {...props}
    >
      {children}
    </select>
  );
}

export { Input, Textarea, NativeSelect };
