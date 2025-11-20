import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                <stat.icon size={48} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;