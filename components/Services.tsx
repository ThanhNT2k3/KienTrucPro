import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onServiceClick?: (service: ServiceItem) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Lĩnh Vực Hoạt Động</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
            Giải Pháp Xây Dựng Toàn Diện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border-b-4 border-transparent hover:border-primary flex flex-col h-full cursor-pointer"
              onClick={() => onServiceClick && onServiceClick(service)}
            >
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                {service.description}
              </p>
              <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onServiceClick && onServiceClick(service);
                }}
                className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary transition-colors bg-transparent border-none p-0 cursor-pointer"
              >
                XEM CHI TIẾT <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
