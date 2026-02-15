import { useFadeIn } from "@/hooks/useFadeIn";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" className="border-t border-border">
      <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Contact</h2>
        <p className="mt-4 text-sm text-foreground/80">
          Always happy to talk about products, engineering problems, and thoughtful technical ideas.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a
            href="mailto:mokshithaedamalapati06@gmail.com"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Mail size={16} />
            mokshithaedamalapati06@gmail.com
          </a>
          <a
            href="https://github.com/moksh1tha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mokshitha-edamalapati-462aa42a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* Calendly embed */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground">Book a Call</h3>
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://calendly.com/edamalapati-mokshitha-mec23-itbhu/let-s-connect"
              title="Schedule a call"
              className="h-[600px] w-full"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
