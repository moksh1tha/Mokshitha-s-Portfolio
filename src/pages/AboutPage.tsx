import { useFadeIn } from "@/hooks/useFadeIn";
import { Badge } from "@/components/ui/badge";

const SKILL_GROUPS = [
  { title: "Languages", items: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Vue.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "OAuth"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { title: "DevOps & Infra", items: ["Docker", "Kubernetes", "Helm", "CI/CD Pipelines"] },
  { title: "Tools & Product", items: ["Figma", "Adobe XD", "Postman", "Streamlit", "WCAG", "Git", "Redis"] },
];

const AboutPage = () => {
  const aboutRef = useFadeIn();
  const skillsRef = useFadeIn();

  return (
    <div>
      {/* About */}
      <section className="border-b border-border">
        <div ref={aboutRef} className="fade-in-section mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">About Me</h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm not just someone who knows a tech stack — I understand how systems work end-to-end.
              My foundation is built on strong fundamentals in operating systems, computer networks, and
              thinking about how large-scale systems behave under real-world constraints. I reason about
              performance, scalability, and reliability before writing a single line of code.
            </p>
            <p>
              Beyond engineering, I think deeply about product — what features matter, why they matter,
              and how to ship them with purpose. I take ownership of every task I'm assigned and every
              discussion I'm part of. I'm also an active open-source contributor, because the best way
              to learn is to build in the open.
            </p>
            <p className="text-foreground/70 italic">
              I'm also an avid Formula 1 fan and always up for discussions on how Ferrari could improve
              their race strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div ref={skillsRef} className="fade-in-section mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-bold text-foreground">Skills & Technologies</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
