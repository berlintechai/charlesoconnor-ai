import Image from "next/image";

import { ContactDialog } from "@/components/site/contact-dialog";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/site/section-label";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <div className="grid items-start gap-x-14 gap-y-10 py-[clamp(40px,8vw,96px)] pb-[clamp(40px,7vw,80px)] min-[821px]:grid-cols-[minmax(0,1fr)_minmax(0,340px)] min-[821px]:items-center">
      <div className="min-w-0">
        <SectionLabel className="mb-6">
          {site.name} &middot; Business development &middot; AI-native systems
        </SectionLabel>
        <h1 className="max-w-[17ch] font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-bold tracking-[-0.035em] text-balance">
          I help businesses integrate <span className="text-primary">AI</span>{" "}
          and build AI-native workflows.
        </h1>
        <p className="mt-7 max-w-[56ch] text-[clamp(1.0625rem,2vw,1.25rem)] text-muted-foreground">
          I work with owners and individual operators on business development,
          on designing and building AI-native business systems, on custom
          software, and on marketing that uses AI to reach the right customers.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ContactDialog>
            <Button size="lg">Work with me</Button>
          </ContactDialog>
          <Button asChild size="lg" variant="outline">
            <a href="#work">See what I do</a>
          </Button>
        </div>
      </div>
      <figure className="m-0 w-[132px] min-w-0 max-[820px]:order-first min-[821px]:w-full">
        <Image
          src="/headshot.jpg"
          width={640}
          height={800}
          priority
          alt={`Portrait of ${site.name}`}
          className="aspect-[4/5] h-auto w-full rounded-[10px] border bg-card object-cover"
        />
      </figure>
    </div>
  );
}
