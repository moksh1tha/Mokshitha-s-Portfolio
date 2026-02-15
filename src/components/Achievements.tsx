import { useFadeIn } from "@/hooks/useFadeIn";
import { Award } from "lucide-react";

const ACHIEVEMENTS = [
  { title: "National Finalist", context: "NxtWave AI-Powered Hackathon (13,000+ participants)" },
  { title: "Top 0.5%", context: "Build with India Hackathon (25,000+ participants)" },
  { title: "National Winner", context: "Marketing Mavericks, Techkriti IIT Kanpur" },
  { title: "National Bronze Medalist", context: "RSFI Roller Derby Skating Championship" },
];

const Achievements = () => {
  const ref = useFadeIn();

  return (
    <section id="achievements" className="border-t border-border">
      <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
        <ul className="mt-8 space-y-4">
          {ACHIEVEMENTS.map((a) => (
            <li key={a.title} className="flex items-start gap-3">
              <Award size={18} className="mt-0.5 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-foreground">{a.title}</span> — {a.context}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
