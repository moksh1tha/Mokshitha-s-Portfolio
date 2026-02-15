import { Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import mokshithaPhoto from "@/assets/mokshitha-photo.png";

const Hero = () => (
  <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:py-28">
    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        Mokshitha Edamalapati
      </h1>
      <p className="mt-2 text-lg font-medium text-muted-foreground">Software Engineer</p>
      <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/80">
        I ideate product features and build them end-to-end — from idea to production.
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        IIT (BHU) Varanasi · Mechanical Engineering
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        <a href="https://github.com/moksh1tha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={20} className="text-muted-foreground transition-colors hover:text-primary" />
        </a>
        <a href="https://www.linkedin.com/in/mokshitha-edamalapati-462aa42a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={20} className="text-muted-foreground transition-colors hover:text-primary" />
        </a>
        <Button asChild size="sm" className="ml-2">
          <a href="https://calendly.com/edamalapati-mokshitha-mec23-itbhu/let-s-connect" target="_blank" rel="noopener noreferrer">
            <Calendar size={16} className="mr-1" />
            Book a Call
          </a>
        </Button>
      </div>
    </div>

    {/* Photo */}
    <div className="flex-shrink-0">
      <img
        src={mokshithaPhoto}
        alt="Mokshitha Edamalapati"
        className="h-56 w-56 rounded-full object-cover border-2 border-border md:h-64 md:w-64"
      />
    </div>
  </section>
);

export default Hero;
