import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "Email",
      value: "karthick09022005@gmail.com",
      href: "mailto:karthick09022005@gmail.com"
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      label: "Phone",
      value: "+91 88382 89069",
      href: "tel:+918838289069"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: "Location",
      value: "Nagercoil, Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "#",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin size={24} />,
      href: "#",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="card-glass p-8 hover-glow animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links & CTA */}
            <Card className="card-glass p-8 hover-glow animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Connect With Me
              </h3>
              
              <div className="space-y-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="text-accent group-hover:text-accent/80 transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                    <ExternalLink className="text-muted-foreground group-hover:text-accent transition-colors duration-300 ml-auto" size={16} />
                  </a>
                ))}
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                  size="lg"
                  onClick={() => window.open('mailto:karthick09022005@gmail.com')}
                >
                  <Mail className="mr-2" size={20} />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10"
                  size="lg"
                  onClick={() => window.open('tel:+918838289069')}
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Quick Message Card */}
          <Card className="card-glass p-8 text-center animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">
              Ready to collaborate on your next project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, need technical consultation, 
              or want to discuss opportunities, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-secondary hover:opacity-90 transition-all duration-300"
                onClick={() => window.open('mailto:karthick09022005@gmail.com?subject=Project Collaboration')}
              >
                Start a Conversation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Download Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;