import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Server, 
  Database,
  Code2,
  Building2
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Node.js Backend CRUD API",
      description: "Developed a comprehensive RESTful CRUD (Create, Read, Update, Delete) API using Node.js, Express.js, and MongoDB. The project demonstrates fundamental backend development skills including database integration, API routing, and data validation.",
      icon: <Server className="text-primary" size={32} />,
      technologies: ["Node.js", "Express.js", "MongoDB", "RESTful API"],
      features: [
        "Complete CRUD operations",
        "MongoDB database integration", 
        "RESTful API architecture",
        "Data validation and error handling"
      ],
      status: "Completed"
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive hotel management system built with Node.js featuring an admin panel for efficient hotel operations management. Includes room booking, guest management, and administrative controls.",
      icon: <Building2 className="text-accent" size={32} />,
      technologies: ["Node.js", "Admin Panel", "Database Management"],
      features: [
        "Admin dashboard interface",
        "Room booking system",
        "Guest management",
        "Operational controls"
      ],
      status: "Completed"
    }
  ];

  const internship = {
    title: "MERN Stack Development",
    company: "Tech Jose",
    status: "Ongoing",
    description: "Currently working as a MERN Stack developer intern, gaining hands-on experience with MongoDB, Express.js, React, and Node.js technologies."
  };

  return (
    <section id="projects" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical applications of my skills through real-world projects 
            and professional experience.
          </p>
        </div>

        {/* Internship Section */}
        <Card className="card-glass p-8 mb-12 max-w-4xl mx-auto hover-glow animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Code2 className="text-accent" size={28} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold">{internship.title}</h3>
                <Badge variant="default" className="bg-gradient-primary">
                  {internship.status}
                </Badge>
              </div>
              <p className="text-accent font-medium text-lg">{internship.company}</p>
              <p className="text-muted-foreground mt-3">{internship.description}</p>
            </div>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glass p-8 hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;