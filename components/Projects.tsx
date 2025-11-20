import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectItem[];
  onProjectClick?: (project: ProjectItem) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'residential', label: 'Nhà Ở' },
    { id: 'commercial', label: 'Thương Mại' },
    { id: 'industrial', label: 'Công Nghiệp' },
  ];

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Hồ Sơ Năng Lực</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Dự Án Tiêu Biểu</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                  filter === f.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => onProjectClick && onProjectClick(project)}
            >
              <div className="h-72 overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <span className="text-primary uppercase text-xs font-bold tracking-wider mb-3">
                    {project.category === 'residential' ? 'Nhà Ở Dân Dụng' : 
                     project.category === 'commercial' ? 'Công Trình Thương Mại' : 'Công Nghiệp'}
                </span>
                <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.location}</p>
                
                <button className="inline-flex items-center text-white border-2 border-primary bg-primary hover:bg-transparent hover:text-white px-5 py-2 rounded-full font-semibold text-sm transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    Xem Chi Tiết <ArrowRight size={16} className="ml-2" />
                </button>
              </div>

              {/* Default Caption (Always Visible on mobile, hidden on desktop hover) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:hidden">
                 <h3 className="text-white text-lg font-bold">{project.title}</h3>
                 <p className="text-gray-300 text-xs">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border border-gray-100">
            Chưa có dự án nào trong danh mục này.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;