import { ContactDialog } from "@/components/site/contact-dialog";
import { CopyEmailButton } from "@/components/site/copy-email-button";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/site/section-label";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-t py-[clamp(40px,6vw,72px)]">
      <div className="grid gap-x-14 gap-y-8 min-[761px]:grid-cols-2">
        <div className="min-w-0">
          <SectionLabel className="mb-8">Contact</SectionLabel>
          <h2 className="font-display text-[clamp(1.625rem,3.6vw,2.375rem)] leading-[1.1] font-semibold tracking-[-0.025em] text-balance">
            Tell me about your business.
          </h2>
          <p className="mt-4 max-w-[44ch] text-muted-foreground">
            A short note on what you sell, who buys it, and where the work piles
            up is enough to start.
          </p>
          <ContactDialog>
            <Button size="lg" className="mt-6">
              Work with me
            </Button>
          </ContactDialog>
        </div>
        <dl className="m-0 content-start">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-y py-3.5">
            <dt className="font-mono text-[0.8125rem] tracking-[0.06em] text-muted-foreground uppercase">
              Email
            </dt>
            <dd className="m-0 flex min-w-0 flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="break-all underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
              >
                {site.email}
              </a>
              <CopyEmailButton value={site.email} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
