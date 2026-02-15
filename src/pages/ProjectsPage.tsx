import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "API Platform for ESG / CSR Investment Analytics",
    description:
      "Full-stack analytics platform to analyze ESG data of 50,000+ companies and map them to all 17 UN SDG goals.",
    bullets: [
      "Improved matching accuracy by 42% using Python NLP pipelines and ESG scoring algorithms",
      "Designed and deployed 5+ containerized microservices using Docker, Helm, and Kubernetes",
      "Achieved 100% uptime and handled 10,000+ concurrent API requests during load testing",
    ],
    tech: ["Python", "Node.js", "NLP", "Docker", "Kubernetes", "Helm", "REST APIs"],
  },
  {
    title: "Trading Simulation Platform with Real-Time P&L Tracking",
    description:
      "MERN-based trading simulation handling 10,000+ trades/day across 500+ users with real-time execution.",
    bullets: [
      "Implemented WebSocket-based real-time trade execution and P&L updates",
      "Reduced API latency by 60% using Redis caching, stateless sessions, and async workflows",
      "Built CI/CD pipelines on Kubernetes enabling 3× faster deployments and 95%+ build success",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Redis", "WebSockets", "Docker", "Kubernetes"],
  },
  {
    title: "Real-Time Risk Dashboard for Portfolio Analytics",
    description:
      "Dashboard computing VaR, Sharpe Ratio, and drawdown metrics across 50+ portfolios.",
    bullets: [
      "Processed live financial market data for 50+ portfolios",
      "Improved computation speed by 35% via Python–Node.js async integrations",
      "Scaled to handle 1M+ data points/day with 99.9% uptime",
    ],
    tech: ["MERN", "Python", "Async Processing", "Docker", "Kubernetes"],
  },
  {
    title: "Dhagakart — Official Ecommerce Platform",
    description:
      "Production ecommerce platform with authentication, cart logic, orders, and 25+ reusable components.",
    bullets: [
      "Built authentication, cart logic, orders, and backend integrations across 10+ APIs",
      "Served 2,000+ users/month with 40% faster load times",
    ],
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    liveUrl: "https://www.dhagakart.com/",
  },
  {
    title: "Ruzo Green Technology — Corporate Website",
    description: "Corporate website for Ruzo Green Technology.",
    bullets: [],
    tech: [],
    liveUrl: "https://www.ruzogreenenergy.com/",
  },
  {
    title: "Alpha MHS — Scalable SPA",
    description: "Scalable single-page application for Alpha MHS.",
    bullets: [],
    tech: [],
    liveUrl: "https://alphamhswebsite.vercel.app/",
  },
];

const ProjectsPage = () => {
  const ref = useFadeIn();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState("");

  return (
    <div>
      <section>
        <div ref={ref} className="fade-in-section mx-auto max-w-5xl px-6 py-20">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Projects</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Case studies of products I've built — from analytics platforms to production ecommerce.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                {p.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {p.tech.length > 0 && (
                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-normal text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}

                {p.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-fit text-primary hover:text-primary"
                    onClick={() => {
                      setPreviewUrl(p.liveUrl!);
                      setPreviewTitle(p.title);
                    }}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Live
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!previewUrl} onOpenChange={() => setPreviewUrl(null)}>
        <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle>{previewTitle}</DialogTitle>
            <DialogDescription>
              <a
                href={previewUrl || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-xs"
              >
                Open in new tab ↗
              </a>
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 px-6 pb-6">
            <iframe
              src={previewUrl || ""}
              title={previewTitle}
              className="h-full w-full rounded-lg border border-border"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;
