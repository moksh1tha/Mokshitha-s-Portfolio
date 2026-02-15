import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/30">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 md:flex-row md:justify-between">
      <p className="text-sm text-muted-foreground">
        I enjoy thoughtful technical discussions — especially when they come with good food.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/moksh1tha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/mokshitha-edamalapati-462aa42a2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Linkedin size={18} />
        </a>
        <span className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Mokshitha E.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
