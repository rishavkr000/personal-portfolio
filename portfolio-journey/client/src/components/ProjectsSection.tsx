
import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

const projects: ProjectProps[] = [
  {
    id: 1,
    title: 'PBI Flow - Power BI Report Automation',
    description: 'A full-stack application designed to automate Power BI report scheduling and distribution. Users can schedule reports for future delivery, which are rendered and exported using GCP integration and stored data from PostgreSQL, streamlining reporting workflows.',
    imageUrl: '/images/PBI.png',
    tags: ['React', 'Express', 'PostgreSQL', 'Node', 'Power BI API', 'JavaScript', 'TypeScript', 'GCP'],
    liveUrl: 'https://app.pbiflow.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A robust backend system for an e-commerce platform featuring user authentication, product management, cart functionality, and order processing.',
    imageUrl: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/e-comm',
    category: 'backend'
  },
  {
    id: 3,
    title: 'Online Book Store',
    description: 'A backend API for an online bookstore with features like user registration, book management, and review system, developed to handle CRUD operations securely.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbzHsFa6p1CeBlUj9LzJvVT-EjrMFXzXHHw&s',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/OnlineBookStore',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Blogging Site',
    description: 'A backend solution for a blogging platform allowing authors to create, update, and delete blogs with authentication, built to enhance backend development skills.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/BloggingSites',
    category: 'backend'
  },
  {
    id: 5,
    title: 'URL Shortener',
    description: 'A lightweight backend service to shorten URLs and redirect users to original links, developed to practice RESTful API design and implementation.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnP3FUCd5jHwaF-Sy2anVdiSbggAI7m2_dw&s',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/UrlShortner',
    category: 'backend'
  },
  {
    id: 6,
    title: 'Open to Intern',
    description: 'This is a backend project where colleges and internships can be registered via a website. It includes APIs to create colleges, register interns, and fetch college-internship association details, aimed at simplifying internship management.',
    imageUrl: 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-open-internships-vector-png-image_12249527.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/OpenToIntern',
    category: 'backend'
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12 space-y-2 animate-fade-in">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my skills and expertise
          </p>
          <div className="h-1 w-20 bg-primary rounded mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'frontend' ? 'default' : 'outline'}
            onClick={() => setFilter('frontend')}
            className="rounded-full"
          >
            Frontend
          </Button>
          <Button
            variant={filter === 'backend' ? 'default' : 'outline'}
            onClick={() => setFilter('backend')}
            className="rounded-full"
          >
            Backend
          </Button>
          <Button
            variant={filter === 'fullstack' ? 'default' : 'outline'}
            onClick={() => setFilter('fullstack')}
            className="rounded-full"
          >
            Full Stack
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
