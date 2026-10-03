import { Contact } from "@/components/site/contact";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { InquiryFormStub } from "@/components/site/inquiry-form-stub";
import { JsonLd } from "@/components/site/json-ld";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Ventures } from "@/components/site/ventures";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1080px] px-[clamp(16px,5vw,48px)] pb-12">
      <JsonLd />
      <InquiryFormStub />
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Process />
        <Ventures />
        <Contact />
      </main>
      <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t pt-6 font-mono text-[0.8125rem] text-muted-foreground">
        <span>&copy; 2026 {site.name}</span>
        <span>{site.domain}</span>
      </footer>
    </div>
  );
}
