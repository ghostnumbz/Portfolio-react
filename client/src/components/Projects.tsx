import { Card, CardContent } from "@/components/ui/card";
import { projectsData } from "@/lib/types";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges that helped me grow as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`text-xs px-2 py-1 rounded-full ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="text-gray-600 font-medium hover:text-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-1"></i> Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
            View all projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
