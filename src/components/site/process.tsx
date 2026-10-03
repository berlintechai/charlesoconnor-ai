import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionLabel } from "@/components/site/section-label";
import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="how" className="border-t py-[clamp(40px,6vw,72px)]">
      <SectionLabel className="mb-8">How it runs</SectionLabel>
      <h2 className="font-display text-[clamp(1.625rem,3.6vw,2.375rem)] leading-[1.1] font-semibold tracking-[-0.025em] text-balance">
        Three steps, in this order.
      </h2>
      <ol className="mt-9 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0">
        {steps.map((step, index) => (
          <li key={step.title} className="flex">
            <Card className="w-full">
              <CardHeader>
                <p className="font-mono text-[0.8125rem] tracking-[0.06em] text-primary uppercase">
                  Step {index + 1}
                </p>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardDescription>{step.body}</CardDescription>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
