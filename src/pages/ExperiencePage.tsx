import { useFadeIn } from "@/hooks/useFadeIn";
import { Award } from "lucide-react";

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

const ACHIEVEMENTS = [
  { title: "National Finalist", context: "NxtWave AI-Powered Hackathon (13,000+ participants)" },
  { title: "Top 0.5%", context: "Build with India Hackathon (25,000+ participants)" },
  { title: "National Winner", context: "Marketing Mavericks, Techkriti IIT Kanpur" },
  { title: "National Bronze Medalist", context: "RSFI Roller Derby Skating Championship" },
];

const ExperiencePage = () => {
  const expRef = useFadeIn();
  const achRef = useFadeIn();

  return (
    <div>
      {/* Experience */}
      <section className="border-b border-border">
        <div ref={expRef} className="fade-in-section mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Experience</h1>
          <div className="mt-12 space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="relative rounded-xl border border-border bg-card p-6 pl-8">
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <div ref={achRef} className="fade-in-section mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <Award size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
