import React from 'react';
import { HardHat, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
             <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary p-2 rounded-md text-white">
                    <HardHat size={24} />
                </div>
                <h2 className="text-xl font-bold text-white">{COMPANY_NAME}</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Dịch vụ xây dựng chuyên nghiệp cam kết chất lượng, đổi mới và sự hài lòng của khách hàng. Xây dựng tương lai, kiến tạo giá trị.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded hover:bg-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded hover:bg-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded hover:bg-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Liên Kết Nhanh</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Trang Chủ</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Giới Thiệu</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dịch Vụ</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Dự Án</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Dịch Vụ</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Thiết Kế Kiến Trúc</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quản Lý Xây Dựng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cải Tạo Sửa Chữa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cung Cấp Vật Tư</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Thiết Kế Nội Thất</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Đăng Ký Tin Tức</h3>
            <p className="text-gray-400 text-sm mb-4">Đăng ký để nhận thông tin mới nhất về dự án và khuyến mãi.</p>
            <div className="flex flex-col space-y-2">
              <input type="email" placeholder="Địa chỉ Email của bạn" className="bg-slate-800 text-white p-3 rounded focus:outline-none focus:ring-1 focus:ring-primary text-sm" />
              <button className="bg-primary hover:bg-amber-600 text-white font-bold py-3 rounded transition-colors text-sm">Đăng Ký</button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Bảo Lưu Mọi Quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;