
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">
              Portfolio
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating engaging digital experiences through thoughtful design and innovative development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/20 transition-colors p-2 rounded-full"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/20 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/20 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="bg-secondary hover:bg-primary/20 transition-colors p-2 rounded-full"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
