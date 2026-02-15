import { useFadeIn } from "@/hooks/useFadeIn";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="border-t border-border">
      <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">About</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
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
          <p>
            I'm also an avid Formula 1 fan and always up for discussions on how Ferrari could improve
            their race strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
