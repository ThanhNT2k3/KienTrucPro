import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Đội ngũ Kỹ sư Chuyên nghiệp",
    "Vật liệu Chất lượng Cao",
    "Cam kết Đúng Tiến độ",
    "Tư vấn & Hỗ trợ 24/7"
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Images Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <img 
                src="https://picsum.photos/600/800?random=50" 
                alt="Construction Worker" 
                className="w-4/5 h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary p-2 rounded-lg shadow-lg translate-y-8 -translate-x-4 hidden md:block">
                 <img 
                  src="https://picsum.photos/400/400?random=51" 
                  alt="Blueprint" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="absolute top-10 -left-6 bg-white p-6 rounded shadow-lg border-l-4 border-primary hidden md:block">
                <span className="text-4xl font-bold text-secondary block">15+</span>
                <span className="text-gray-500 text-sm uppercase font-semibold">Năm Kinh Nghiệm</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Về KienTrucPro</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
              Đơn Vị Dẫn Đầu Trong <br /> Ngành Xây Dựng
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Với hơn 15 năm kinh nghiệm, KienTrucPro đã khẳng định vị thế là một công ty xây dựng hàng đầu. Chúng tôi chuyên thực hiện các dự án phức tạp từ nhà ở, thương mại đến công nghiệp. Cam kết đổi mới và bền vững thúc đẩy chúng tôi mang lại kết quả vượt trội cho mọi khách hàng.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Đội ngũ của chúng tôi bao gồm các kiến trúc sư, kỹ sư và công nhân lành nghề, tất cả đều có chung niềm đam mê xây dựng sự xuất sắc. Chúng tôi coi mỗi dự án như một tác phẩm nghệ thuật.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-secondary font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block border-b-2 border-primary text-secondary font-bold hover:text-primary transition-colors pb-1">
              Xem Thêm Về Chúng Tôi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;