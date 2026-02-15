import { useFadeIn } from "@/hooks/useFadeIn";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const ref = useFadeIn();

  return (
    <section>
      <div ref={ref} className="fade-in-section mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Get in Touch</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Always happy to talk about products, engineering problems, and thoughtful technical ideas.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:mokshithaedamalapati06@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">mokshithaedamalapati06@gmail.com</p>
            </div>
          </a>
          <a
            href="https://github.com/moksh1tha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Github size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">@moksh1tha</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mokshitha-edamalapati-462aa42a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Linkedin size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Mokshitha Edamalapati</p>
            </div>
          </a>
          <a
            href="https://calendly.com/edamalapati-mokshitha-mec23-itbhu/let-s-connect"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Calendar size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Book a Call</p>
              <p className="text-xs text-muted-foreground">Schedule via Calendly</p>
            </div>
          </a>
        </div>

        {/* Calendly Embed */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-foreground">Schedule a Call</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <iframe
              src="https://calendly.com/edamalapati-mokshitha-mec23-itbhu/let-s-connect"
              title="Schedule a call"
              className="h-[650px] w-full"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
