import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer currently pursuing B.Tech in AI & Data Science, 
            with hands-on experience in backend development and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="card-glass p-8 hover-glow animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Education</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-lg">B.Tech in AI & Data Science</h4>
                  <p className="text-accent font-medium">National Engineering College, Kovilpatti</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Calendar size={16} />
                    <span>2022 - 2026</span>
                  </div>
                  <p className="text-muted-foreground mt-2">CGPA: 7.04</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Higher Secondary (HSC)</h4>
                  <p className="text-accent font-medium">Pearl Matriculation Higher Secondary School</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Calendar size={16} />
                    <span>2021 - 2022</span>
                  </div>
                  <p className="text-muted-foreground mt-2">58.3%</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card-glass p-8 hover-glow animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Personal Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Nagercoil, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Languages</h4>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Tamil</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">English</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Interests</h4>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Video Editing</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Meme Creation</span>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Current Focus</h4>
                <p className="text-muted-foreground">
                  Currently working on MERN Stack development and expanding knowledge in 
                  modern web technologies and cloud computing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;