import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/site/section-label";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="work" className="border-t py-[clamp(40px,6vw,72px)]">
      <SectionLabel className="mb-8">What I do</SectionLabel>
      <div>
        {services.map((service) => (
          <div
            key={service.tag}
            className="grid gap-x-10 gap-y-2 border-t py-7 first:border-t-0 first:pt-0 min-[641px]:grid-cols-[minmax(0,200px)_minmax(0,1fr)]"
          >
            <div className="font-mono text-[0.8125rem] tracking-[0.06em] text-primary uppercase min-[641px]:pt-1.5">
              {service.tag}
            </div>
            <div className="min-w-0">
              <h3 className="mb-2 font-display text-[1.3125rem] leading-tight font-semibold tracking-[-0.015em]">
                {service.title}
              </h3>
              <p className="max-w-[62ch] text-muted-foreground">
                {service.body}
              </p>
              {service.skills.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
