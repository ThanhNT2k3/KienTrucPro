import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen md:h-[600px] lg:h-[800px] flex items-center overflow-hidden mt-[60px] md:mt-[100px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Công trường xây dựng" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
            Thành Lập Từ 2008
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kiến Tạo Không Gian <br /> 
            <span className="text-primary">Vững Bền Tương Lai</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Chúng tôi cung cấp dịch vụ xây dựng và cải tạo hàng đầu với trọng tâm là chất lượng, an toàn và đúng tiến độ. Hãy để chúng tôi xây dựng nền tảng cho tương lai của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-primary hover:bg-amber-600 text-white px-8 py-4 rounded font-bold transition-colors text-center flex items-center justify-center">
              Dịch Vụ Của Chúng Tôi <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white px-8 py-4 rounded font-bold transition-colors text-center">
              Liên Hệ Tư Vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;