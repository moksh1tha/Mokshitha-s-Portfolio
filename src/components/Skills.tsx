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

const Skills = () => {
  const ref = useFadeIn();

  return (
    <section id="skills" className="border-t border-border">
      <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        <div className="mt-8 space-y-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
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
  );
};

export default Skills;
