import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { ArrowLeft, CheckCircle, ArrowRight, Phone } from 'lucide-react';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full bg-secondary overflow-hidden">
         {service.imageUrl && (
             <>
                <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
             </>
         )}
        
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center h-full">
            <button 
                onClick={onBack}
                className="absolute top-8 left-4 md:left-4 flex items-center text-white/80 hover:text-primary transition-colors mb-4 group"
            >
                <div className="bg-white/10 p-2 rounded-full mr-2 group-hover:bg-white/20">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-medium">Quay lại danh sách dịch vụ</span>
            </button>

            <div className="max-w-4xl mt-8">
                <div className="flex items-center space-x-3 mb-4 text-primary">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <service.icon size={32} />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-sm">Dịch Vụ Chuyên Nghiệp</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">{service.title}</h1>
                <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-secondary mb-6 pb-4 border-b border-gray-100">Tổng Quan Dịch Vụ</h2>
                <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                    <p className="leading-relaxed whitespace-pre-line">
                        {service.longDescription || service.description}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-secondary mb-6">Tại Sao Chọn Chúng Tôi?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features ? service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                <span className="font-medium text-gray-700">{feature}</span>
                            </div>
                        )) : (
                            <>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="font-medium text-gray-700">Đội ngũ chuyên gia giàu kinh nghiệm</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="font-medium text-gray-700">Cam kết đúng tiến độ thi công</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="font-medium text-gray-700">Minh bạch về chi phí và vật liệu</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="font-medium text-gray-700">Bảo hành công trình dài hạn</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                    <div className="bg-secondary text-white p-8 rounded-lg shadow-xl relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 bg-primary/20 w-40 h-40 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Cần Tư Vấn Ngay?</h3>
                        <p className="text-gray-300 mb-8 relative z-10">Để lại thông tin hoặc liên hệ trực tiếp để được các chuyên gia của chúng tôi hỗ trợ miễn phí.</p>
                        
                        <a 
                            href="tel:0912345678" 
                            className="flex items-center justify-center w-full bg-white text-secondary hover:bg-gray-100 font-bold py-4 rounded mb-4 transition-colors relative z-10"
                        >
                            <Phone size={18} className="mr-2 text-primary" />
                            Gọi 0912 345 678
                        </a>
                        
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.getElementById('contact');
                                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="flex items-center justify-center w-full bg-primary hover:bg-amber-600 text-white font-bold py-4 rounded transition-colors relative z-10"
                        >
                            Gửi Yêu Cầu Báo Giá <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>

                    <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm">
                        <h4 className="font-bold text-secondary mb-4 border-l-4 border-primary pl-3">Quy Trình Làm Việc</h4>
                        <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                            <li className="mb-2 ml-4">
                                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h5 className="font-bold text-gray-800">1. Tiếp nhận yêu cầu</h5>
                                <p className="text-sm text-gray-500">Lắng nghe và tư vấn sơ bộ</p>
                            </li>
                            <li className="mb-2 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h5 className="font-bold text-gray-800">2. Khảo sát & Báo giá</h5>
                                <p className="text-sm text-gray-500">Đánh giá thực tế và lên dự toán</p>
                            </li>
                            <li className="mb-2 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h5 className="font-bold text-gray-800">3. Ký kết hợp đồng</h5>
                                <p className="text-sm text-gray-500">Thống nhất phương án và tiến độ</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h5 className="font-bold text-gray-800">4. Thi công & Bàn giao</h5>
                                <p className="text-sm text-gray-500">Thực hiện và nghiệm thu công trình</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
