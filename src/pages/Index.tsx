import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFadeIn } from "@/hooks/useFadeIn";
import mokshithaPhoto from "@/assets/mokshitha-photo.png";

const HIGHLIGHTS = [
  "Full-Stack Engineer",
  "Product Thinker",
  "Open Source Contributor",
  "IIT (BHU) Varanasi",
];

const Index = () => {
  const heroRef = useFadeIn();
  const skillsRef = useFadeIn();
  const achievementsRef = useFadeIn();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div ref={heroRef} className="fade-in-section relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:py-32">
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {HIGHLIGHTS.map((h) => (
                <Badge key={h} variant="secondary" className="font-medium text-xs">
                  {h}
                </Badge>
              ))}
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Mokshitha
              <span className="block text-primary">Edamalapati</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I ideate product features and build them end-to-end — from idea to production.
            </p>
            <p className="mt-2 text-sm text-muted-foreground/70">
              B.Tech Mechanical Engineering · IIT (BHU) Varanasi
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/projects">
                  View Projects <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href="https://calendly.com/edamalapati-mokshitha-mec23-itbhu/let-s-connect" target="_blank" rel="noopener noreferrer">
                  <Calendar size={16} className="mr-1" />
                  Book a Call
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
              <a href="https://github.com/moksh1tha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} className="text-muted-foreground transition-colors hover:text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/mokshitha-edamalapati-462aa42a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} className="text-muted-foreground transition-colors hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
            <img
              src={mokshithaPhoto}
              alt="Mokshitha Edamalapati"
              className="relative h-60 w-60 rounded-full border-4 border-background object-cover shadow-2xl md:h-72 md:w-72"
            />
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="border-t border-border bg-muted/30">
        <div ref={skillsRef} className="fade-in-section mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
            <Link to="/about" className="text-sm font-medium text-primary hover:underline">
              Learn more <ArrowRight size={14} className="ml-1 inline" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Frontend", items: "React · Next.js · Vue.js · Tailwind" },
              { title: "Backend", items: "Node.js · Express · REST · WebSockets" },
              { title: "DevOps", items: "Docker · Kubernetes · Helm · CI/CD" },
              { title: "Languages", items: "Python · TypeScript · C++ · SQL" },
              { title: "Databases", items: "PostgreSQL · MongoDB · Redis" },
              { title: "Tools", items: "Figma · Postman · Git · Streamlit" },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="border-t border-border">
        <div ref={achievementsRef} className="fade-in-section mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "National Finalist", context: "NxtWave AI-Powered Hackathon (13,000+ participants)" },
              { title: "Top 0.5%", context: "Build with India Hackathon (25,000+ participants)" },
              { title: "National Winner", context: "Marketing Mavericks, Techkriti IIT Kanpur" },
              { title: "National Bronze Medalist", context: "RSFI Roller Derby Skating Championship" },
            ].map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-card p-5">
                <p className="text-lg font-semibold text-foreground">{a.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
