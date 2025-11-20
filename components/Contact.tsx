import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Liên Hệ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
              Yêu Cầu Báo Giá
            </h2>
            <p className="text-gray-600 mb-8">
              Bạn đã sẵn sàng bắt đầu dự án? Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí. Chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded shadow-sm text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Điện Thoại</h4>
                  <p className="text-gray-600">{CONTACT_PHONE}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded shadow-sm text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Email</h4>
                  <p className="text-gray-600">{CONTACT_EMAIL}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded shadow-sm text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Văn Phòng</h4>
                  <p className="text-gray-600">{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Họ Tên</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="email@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Số Điện Thoại</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="09..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Dịch Vụ Quan Tâm</label>
                  <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                    <option>Tổng Thầu Xây Dựng</option>
                    <option>Cải Tạo Nhà</option>
                    <option>Thiết Kế & Thi Công</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Lời Nhắn</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Mô tả dự án của bạn..."></textarea>
              </div>
              <button className="bg-primary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded transition-colors w-full md:w-auto">
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;