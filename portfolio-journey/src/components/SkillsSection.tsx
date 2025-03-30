
import SkillBar from './SkillBar';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Code, Database, Layout, Server } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-card/30">
      <div className="section-container">
        <div className="text-center mb-12 space-y-2 animate-fade-in">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set throughout my career
          </p>
          <div className="h-1 w-20 bg-primary rounded mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Frontend Development
              </h3>
              <SkillBar name="React.js" percentage={80} animationDelay="100ms" />
              <SkillBar name="JavaScript/TypeScript" percentage={80} animationDelay="200ms" />
              <SkillBar name="HTML/CSS" percentage={75} animationDelay="300ms" />
              <SkillBar name="Material UI" percentage={70} animationDelay="500ms" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Server className="mr-2 h-5 w-5 text-primary" />
                Backend Development
              </h3>
              <SkillBar name="Node.js/Express.js" percentage={85} animationDelay="100ms" />
              <SkillBar name="RESTful APIs" percentage={90} animationDelay="200ms" />
              <SkillBar name="PowerBI APIs" percentage={80} animationDelay="300ms" />
              <SkillBar name="Authentication/Security" percentage={85} animationDelay="400ms" />
              <SkillBar name="Data Structure & Algorithms" percentage={70} animationDelay="400ms" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Database className="mr-2 h-5 w-5 text-primary" />
                Database & DevOps
              </h3>
              <SkillBar name="MongoDB" percentage={90} animationDelay="100ms" />
              <SkillBar name="PostgreSQL" percentage={85} animationDelay="200ms" />
              <SkillBar name="Docker" percentage={75} animationDelay="300ms" />
              <SkillBar name="AWS" percentage={80} animationDelay="400ms" />
              <SkillBar name="CI/CD" percentage={60} animationDelay="500ms" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Layout className="mr-2 h-5 w-5 text-primary" />
                Other Skills
              </h3>
              <SkillBar name="UI/UX Design" percentage={75} animationDelay="100ms" />
              <SkillBar name="Responsive Design" percentage={85} animationDelay="200ms" />
              <SkillBar name="Testing (Jest, React Testing Library)" percentage={80} animationDelay="300ms" />
              <SkillBar name="Version Control (Git)" percentage={90} animationDelay="400ms" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: <Layout className="h-10 w-10 text-primary" />,
              title: "Frontend Development",
              description: "Creating responsive, intuitive user interfaces with modern frameworks"
            },
            {
              icon: <Server className="h-10 w-10 text-primary" />,
              title: "Backend Development",
              description: "Building robust, scalable APIs and server-side applications"
            },
            {
              icon: <Database className="h-10 w-10 text-primary" />,
              title: "Database Design",
              description: "Designing efficient database schemas for optimal performance"
            },
            {
              icon: <Check className="h-10 w-10 text-primary" />,
              title: "Testing & Deployment",
              description: "Ensuring quality through testing and smooth deployment processes"
            }
          ].map((service, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
