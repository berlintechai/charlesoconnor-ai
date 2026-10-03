"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CopyEmailButton({ value }: { value: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 1800);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={copy}
      className="border-border font-mono font-normal text-muted-foreground"
      aria-live="polite"
    >
      {state === "copied" ? <Check /> : <Copy />}
      {state === "copied"
        ? "Copied"
        : state === "failed"
          ? "Copy failed"
          : "Copy"}
    </Button>
  );
}
