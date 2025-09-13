import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Award,
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Core Java", "Core Python"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-accent" size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database className="text-primary" size={24} />,
      skills: ["SQL", "MongoDB"]
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="text-accent" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const certificates = [
    "Freecodecamp",
    "Database Management System",
    "Infosys SpringBoard", 
    "NPTEL",
    "Cloud Computing"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've developed through 
            academic projects and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-glass p-6 hover-glow animate-scale-in skill-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="card-glass p-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="text-primary" size={28} />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <p className="text-muted-foreground">
              Continuous learning through various platforms and institutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                <Cloud className="text-accent mx-auto mb-2" size={20} />
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;