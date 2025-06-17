import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Globe, Calendar, MapPin, Code, Palette } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Project {
  name: string;
  url: string;
  category: string;
  type: string;
  location: string;
  logo?: string;
  description?: string;
  technologies?: string[];
  completedDate?: string;
  features?: string[];
  challenges?: string;
  clientTestimonial?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [index]);

  const handleCardClick = () => {
    if (clickCount === 0) {
      // First click - expand card
      setIsExpanded(true);
      setClickCount(1);
      
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.4, ease: "power2.out" }
        );
      }
    } else {
      // Second click - redirect to project
      if (project.url && !project.url.includes('#')) {
        const url = project.url.startsWith('http') ? project.url : `https://${project.url}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleCloseExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setClickCount(0);
    
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const getCategoryIcon = () => {
    switch (project.category) {
      case 'web':
        return <Globe className="w-4 h-4" />;
      case 'ecommerce':
        return <Globe className="w-4 h-4" />;
      case 'custom':
        return <Code className="w-4 h-4" />;
      case 'marketing':
        return <Palette className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getProjectDetails = () => {
    const baseDetails = {
      technologies: project.technologies || ['React', 'TypeScript', 'Tailwind CSS'],
      completedDate: project.completedDate || '2024',
      features: project.features || [
        'Responsive Design',
        'SEO Optimized',
        'Performance Optimized',
        'Cross-browser Compatible'
      ],
      challenges: project.challenges || 'Delivered a modern, scalable solution that exceeded client expectations.',
      clientTestimonial: project.clientTestimonial || 'Excellent work and professional delivery. Highly recommended!'
    };

    return baseDetails;
  };

  const details = getProjectDetails();

  return (
    <Card 
      ref={cardRef}
      className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg hover:shadow-2xl ${
        isExpanded ? 'ring-2 ring-mdm-gold' : ''
      }`}
      onClick={handleCardClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              {project.logo ? (
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg p-2">
                  <img 
                    src={project.logo} 
                    alt={project.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : (
                <div className="text-mdm-gold">
                  {getCategoryIcon()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-mdm-black font-satoshi truncate">
                  {project.name}
                </h3>
                <p className="text-mdm-gold font-satoshi font-semibold text-sm">
                  {project.type}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-500 font-satoshi text-sm mb-2">
              <MapPin className="w-3 h-3" />
              {project.location}
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-2">
            {isExpanded && (
              <button
                onClick={handleCloseExpanded}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-xs"
              >
                ✕
              </button>
            )}
            {project.url.startsWith('http') || !project.url.includes('#') ? (
              <div className="p-2 rounded-full bg-mdm-gold hover:bg-mdm-dark-gold transition-colors flex-shrink-0">
                <ExternalLink className="w-4 h-4 text-mdm-black" />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-gray-200 flex-shrink-0">
                <Globe className="w-4 h-4 text-gray-500" />
              </div>
            )}
          </div>
        </div>
        
        {project.description && (
          <p className="text-gray-600 font-satoshi text-sm leading-relaxed mb-3">
            {project.description}
          </p>
        )}
        
        {project.url && !project.url.includes('#') && (
          <div className="text-gray-500 font-satoshi text-xs font-mono break-all mb-3">
            {project.url}
          </div>
        )}

        {isExpanded && (
          <div ref={contentRef} className="border-t pt-4 mt-4 space-y-4">
            <div className="text-center text-sm text-mdm-gold font-semibold mb-3">
              Click again to visit project →
            </div>
            
            <div>
              <h4 className="font-semibold text-mdm-black mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-mdm-gold" />
                Project Details
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Completed:</span> {details.completedDate}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Challenge:</span> {details.challenges}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-mdm-black mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-mdm-gold/10 text-mdm-dark-gold text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-mdm-black mb-2">Key Features</h4>
              <ul className="space-y-1">
                {details.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-mdm-gold rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-mdm-gold/5 p-3 rounded-lg">
              <h4 className="font-semibold text-mdm-black mb-2">Client Feedback</h4>
              <p className="text-sm text-gray-600 italic">"{details.clientTestimonial}"</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;