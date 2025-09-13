import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">Karthick V</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
              AI & Data Science Developer
            </div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              B.Tech student passionate about <span className="text-accent font-semibold">backend development</span>, 
              <span className="text-primary font-semibold"> full-stack technologies</span>, and creating 
              innovative solutions with modern tech stacks.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover-glow"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center mb-12">
            <a 
              href="mailto:karthick09022005@gmail.com" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 p-2"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918838289069" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 p-2"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-float"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-muted-foreground hover:text-accent transition-colors duration-300" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;