"use client";

import { useId, useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input, NativeSelect, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { inquiry, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  function onOpenChange(next: boolean) {
    setOpen(next);
    // Start fresh the next time it opens, unless a send is in flight.
    if (!next && status !== "sending") setStatus("idle");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const id = (name: string) => `${uid}-${name}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {status === "sent" ? (
          <div className="flex flex-col gap-5 py-2">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-5" aria-hidden />
            </span>
            <DialogHeader>
              <DialogTitle>Thanks, your note is in.</DialogTitle>
              <DialogDescription>
                I read every message and will reply to the email address you
                gave.
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild>
              <Button variant="outline" className="self-start">
                Close
              </Button>
            </DialogClose>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Tell me about your business</DialogTitle>
              <DialogDescription>
                A few lines on what you sell, who buys it, and where the work
                piles up is enough to start.
              </DialogDescription>
            </DialogHeader>

            <form
              name={inquiry.formName}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="mt-6 flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value={inquiry.formName} />
              <input type="hidden" name="subject" value={inquiry.subject} />
              {/* Honeypot: people never see this, spam bots fill it in. */}
              <div className="sr-only" aria-hidden="true">
                <label>
                  Leave this empty
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-4 min-[521px]:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor={id("name")}>Your name</Label>
                  <Input
                    id={id("name")}
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor={id("email")}>Email</Label>
                  <Input
                    id={id("email")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor={id("company")}>
                  Business name{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </Label>
                <Input
                  id={id("company")}
                  name="company"
                  autoComplete="organization"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor={id("interest")}>What do you need help with?</Label>
                <NativeSelect
                  id={id("interest")}
                  name="interest"
                  defaultValue={inquiry.interests[inquiry.interests.length - 1]}
                >
                  {inquiry.interests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </NativeSelect>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor={id("message")}>
                  Anything else I should know{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </Label>
                <Textarea id={id("message")} name="message" />
              </div>

              <div aria-live="polite">
                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-md border border-primary px-3 py-2 text-sm"
                  >
                    That didn&rsquo;t send. Please try again, or email{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button type="submit" size="lg" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send message"}
                </Button>
                <p className="text-sm text-muted-foreground">
                  I use your details only to reply.
                </p>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
