
import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

const projects: ProjectProps[] = [
  {
    id: 1,
    title: 'PBI Flow - Power BI Report Automation',
    description: 'A full-stack platform that automates Power BI report scheduling and delivery. Users can schedule reports with dynamic filters, which are rendered and exported via GCP services and delivered as attachments through integrated email services like Outlook and SendGrid. The system leverages PostgreSQL for job tracking, supports retry logic for failed exports, and simplifies enterprise reporting workflows end-to-end.',
    imageUrl: '/images/PBI.png',
    tags: ['React', 'Express', 'PostgreSQL', 'Node', 'Power BI API', 'JavaScript', 'TypeScript', 'GCP'],
    liveUrl: 'https://app.pbiflow.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A robust e-commerce backend system built to handle end-to-end operations including user authentication, product management, cart and order handling, and secure checkout flows. The system supports real-time inventory tracking, role-based access control for admins, and seamless API integration for frontend clients. Designed with scalability and modularity in mind to support future growth and third-party service integration.',
    imageUrl: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Git'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/e-comm',
    category: 'backend'
  },
  {
    id: 3,
    title: 'Online Book Store',
    description: 'A backend RESTful API built with Node.js, Express, and MongoDB to support a fully functional online bookstore. The system includes secure user authentication, book catalog management, and a review system where users can post and manage feedback. Designed to handle robust CRUD operations with proper validations and error handling, making it scalable and ready for integration with any frontend.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbzHsFa6p1CeBlUj9LzJvVT-EjrMFXzXHHw&s',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/OnlineBookStore',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Blogging Site',
    description: 'A backend solution for a dynamic blogging platform, developed using Node.js, Express, and MongoDB. It enables authenticated users to create, edit, and delete blog posts, with secure user authentication and authorization mechanisms. Designed with modular architecture and proper data validations to ensure scalability and clean code practices — ideal for real-world backend development scenarios.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/BloggingSites',
    category: 'backend'
  },
  {
    id: 5,
    title: 'URL Shortener',
    description: 'A lightweight backend service built with Node.js, Express, and MongoDB that shortens long URLs and redirects users to the original links. The project is designed to practice RESTful API design principles, focusing on efficient URL handling, scalability, and performance. It includes features like URL validation, error handling, and tracking for better user experience and system reliability.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnP3FUCd5jHwaF-Sy2anVdiSbggAI7m2_dw&s',
    tags: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/rishavkr000/projects/tree/main/UrlShortner',
    category: 'backend'
  },
  {
    id: 6,
    title: 'Open to Intern',
    description: 'A backend system built with Node.js, Express, and MongoDB that allows colleges and internship programs to register via a web interface. The project includes APIs for adding colleges, registering interns, and fetching the details of college-internship associations. Designed to streamline the management of internships, it simplifies the process for both students and institutions by providing a central platform for internship tracking and registration.',
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
