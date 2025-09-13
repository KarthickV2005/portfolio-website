import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold">
              <span className="text-gradient">Karthick V</span>
            </div>
            <p className="text-muted-foreground mt-2">
              AI & Data Science Developer
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>using</span>
            <Code2 className="text-primary" size={16} />
            <span>React & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            © {currentYear} Karthick V. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;