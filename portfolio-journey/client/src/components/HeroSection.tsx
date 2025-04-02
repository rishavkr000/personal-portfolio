
import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const CV_URL = import.meta.env.VITE_CV_URL;

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafting Digital <span className="text-primary">Experiences</span> That Inspire
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              I design and develop web applications that are beautiful, functional, and provide exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = CV_URL;
                  link.download = "Rishav's_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FileText className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card hover:bg-secondary transition-colors p-3 rounded-full"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card hover:bg-secondary transition-colors p-3 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl">
              <div className="absolute inset-0 bg-[url('/images/photo.jpg')] bg-top bg-repeat mix-blend-overlay"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="bg-card hover:bg-secondary transition-colors p-3 rounded-full inline-block"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
