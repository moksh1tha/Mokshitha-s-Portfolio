import { useFadeIn } from "@/hooks/useFadeIn";

const EXPERIENCES = [
  {
    role: "Technical Product Intern",
    company: "Unstop",
    bullets: [
      "Built a dedicated Hoster User Profile improving workflows for 42,000+ active event organizers",
      "Developed a Resume Bank feature reducing recruiter filtering time by over 50%",
      "Shipped Saved Templates and guided tutorials, cutting event listing time by 40%",
      "Worked at the intersection of product, UX, and engineering",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Dhagakart",
    bullets: [
      "Built and scaled production-grade full-stack features for a live ecommerce platform",
      "Owned frontend architecture, backend integrations, and performance optimization",
      "Delivered features used by thousands of real users",
    ],
  },
];

const Experience = () => {
  const ref = useFadeIn();

  return (
    <section id="experience" className="border-t border-border">
      <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        <div className="mt-8 space-y-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
