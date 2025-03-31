
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="bg-card/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072')] bg-cover bg-center mix-blend-overlay"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6 animate-fade-in-right">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
            
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with 2 years of experience building modern web applications. 
              I specialize in creating responsive, user-friendly interfaces with React and building robust 
              backend systems with Node.js.
            </p>
            
            <p className="text-muted-foreground">
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only meet but exceed client expectations.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Material UI</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
