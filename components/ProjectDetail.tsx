import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { ArrowLeft, MapPin, Calendar, User, Maximize2, ArrowRight } from 'lucide-react';

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
      
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center text-white">
            <button 
                onClick={onBack}
                className="absolute top-8 left-4 md:left-0 flex items-center text-white/80 hover:text-primary transition-colors mb-4 group"
            >
                <div className="bg-white/10 p-2 rounded-full mr-2 group-hover:bg-white/20">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-medium">Quay lại danh sách</span>
            </button>

            <div className="max-w-3xl mt-12">
                <span className="inline-block bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
                    {project.category === 'residential' ? 'Nhà Ở' : 
                     project.category === 'commercial' ? 'Thương Mại' : 'Công Nghiệp'}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{project.title}</h1>
                <div className="flex items-center text-gray-300 text-lg">
                    <MapPin size={20} className="mr-2 text-primary" />
                    {project.location}
                </div>
            </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Khách Hàng</p>
                    <p className="text-secondary font-bold text-lg">{project.client || "Đang cập nhật"}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Hoàn Thành</p>
                    <p className="text-secondary font-bold text-lg">{project.completionYear || "Đang thi công"}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Diện Tích</p>
                    <p className="text-secondary font-bold text-lg">{project.area || "N/A"}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Kiến Trúc Sư</p>
                    <p className="text-secondary font-bold text-lg">KienTrucPro Team</p>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-secondary mb-6">Chi Tiết Dự Án</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <p className="leading-relaxed mb-6">
                        {project.description || "Thông tin chi tiết về dự án đang được cập nhật. Vui lòng liên hệ trực tiếp để biết thêm thông tin."}
                    </p>
                    <p className="leading-relaxed">
                        Tại KienTrucPro, chúng tôi cam kết mang đến chất lượng thi công tốt nhất, đảm bảo an toàn lao động và tiến độ bàn giao. Dự án này là minh chứng cho khả năng thiết kế và xây dựng chuyên nghiệp của đội ngũ chúng tôi.
                    </p>
                </div>

                {/* Gallery */}
                <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">Hình Ảnh Thi Công</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main Image repeated as mockup for gallery if no gallery exists */}
                    <div className="rounded-lg overflow-hidden h-64 group relative">
                        <img src={project.imageUrl} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                    {project.gallery ? project.gallery.map((img, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden h-64 group relative">
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    )) : (
                        <div className="rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                            <span className="flex items-center"><Maximize2 className="mr-2" size={16} /> Xem thêm ảnh</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
                <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Bạn Thích Dự Án Này?</h3>
                    <p className="text-gray-300 mb-6">Liên hệ ngay với chúng tôi để thảo luận về ý tưởng xây dựng của bạn.</p>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="block w-full bg-primary hover:bg-amber-600 text-white text-center font-bold py-4 rounded transition-colors">
                        Nhận Báo Giá Ngay
                    </a>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-bold text-secondary mb-4 border-l-4 border-primary pl-3">Dịch Vụ Liên Quan</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600 hover:text-primary cursor-pointer transition-colors">
                            <ArrowRight size={14} className="mr-2 text-primary" />
                            Thiết Kế Kiến Trúc
                        </li>
                        <li className="flex items-center text-gray-600 hover:text-primary cursor-pointer transition-colors">
                            <ArrowRight size={14} className="mr-2 text-primary" />
                            Thi công nội thất
                        </li>
                        <li className="flex items-center text-gray-600 hover:text-primary cursor-pointer transition-colors">
                            <ArrowRight size={14} className="mr-2 text-primary" />
                            Tư vấn phong thủy
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;