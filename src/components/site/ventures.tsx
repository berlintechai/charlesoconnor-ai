import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionLabel } from "@/components/site/section-label";
import { industries, software, venture } from "@/lib/site";

const grid =
  "grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0";

export function Ventures() {
  return (
    <section id="ventures" className="border-t py-[clamp(40px,6vw,72px)]">
      <SectionLabel className="mb-8">Ventures</SectionLabel>

      <div className="border-y py-[22px]">
        <h3 className="mb-2 font-display text-[1.3125rem] leading-tight font-semibold tracking-[-0.015em]">
          {venture.name}
        </h3>
        <p className="text-muted-foreground">{venture.body}</p>
      </div>

      <SectionLabel className="mt-12 mb-5">Current industries</SectionLabel>
      <ul className={grid}>
        {industries.map((item) => (
          <li key={item.title} className="flex">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardDescription>{item.body}</CardDescription>
            </Card>
          </li>
        ))}
      </ul>

      <SectionLabel className="mt-12 mb-5">Software in development</SectionLabel>
      <ul className={grid}>
        {software.map((item) => (
          <li key={item.title} className="flex">
            <Card className="w-full">
              <CardHeader>
                <Badge variant="default">In development</Badge>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardDescription>{item.body}</CardDescription>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
