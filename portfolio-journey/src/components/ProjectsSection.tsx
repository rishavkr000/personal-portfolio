
import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

const projects: ProjectProps[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and secure payment processing.',
    imageUrl: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-ab1010c30391?q=80&w=2039',
    tags: ['React', 'Redux', 'Firebase', 'Material UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Real Estate Listings Portal',
    description: 'A property listings website with search filters, map integration, and user authentication.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973',
    tags: ['React', 'Express', 'MongoDB', 'Google Maps API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'Fitness Tracking Dashboard',
    description: 'A comprehensive dashboard for tracking workouts, nutrition, and progress with data visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'A customizable CMS for blogs and content websites with rich text editing and media management.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
    tags: ['React', 'Express', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com',
    category: 'backend'
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'A weather application providing current conditions and forecasts based on user location.',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070',
    tags: ['React', 'WeatherAPI', 'Geolocation'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'frontend'
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
