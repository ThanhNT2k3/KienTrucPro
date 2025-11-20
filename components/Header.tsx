import React, { useState, useEffect } from 'react';
import { Menu, X, Search, HardHat, LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import TopBar from './TopBar';
import { User } from '../types';

interface HeaderProps {
  currentView: 'home' | 'login' | 'admin';
  onNavigate: (view: 'home' | 'login' | 'admin') => void;
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation for the "Home" view
  const homeNavLinks = [
    { name: 'Trang Chủ', href: '#' },
    { name: 'Giới Thiệu', href: '#about' },
    { name: 'Dịch Vụ', href: '#services' },
    { name: 'Dự Án', href: '#projects' },
    { name: 'Liên Hệ', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const performScroll = () => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (currentView !== 'home') {
      onNavigate('home');
      // Allow state to update and DOM to render before scrolling
      setTimeout(performScroll, 100);
    } else {
      performScroll();
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full z-50 fixed top-0">
      {currentView === 'home' && <TopBar />}
      <div className={`transition-all duration-300 ${
        isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4 md:bg-white md:py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-primary p-2 rounded-md text-white">
                <HardHat size={28} />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-secondary leading-none">{COMPANY_NAME}</h1>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase">Construction</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {homeNavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-secondary font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}

            {user ? (
              <div className="flex items-center space-x-4 ml-4 border-l border-gray-200 pl-4">
                <div className="text-right hidden lg:block">
                   <p className="text-xs text-gray-500">Xin chào,</p>
                   <p className="text-sm font-bold text-secondary">{user.name}</p>
                </div>
                
                {currentView !== 'admin' && (
                  <button 
                    onClick={() => onNavigate('admin')}
                    className="bg-secondary text-white p-2 rounded hover:bg-slate-700 transition-colors"
                    title="Quản lý Dự Án"
                  >
                    <LayoutDashboard size={20} />
                  </button>
                )}
                
                <button 
                  onClick={onLogout}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  title="Đăng xuất"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onNavigate('login')}
                className="flex items-center text-secondary hover:text-primary transition-colors ml-4 font-medium text-sm"
              >
                <LogIn size={18} className="mr-1" /> Đăng Nhập
              </button>
            )}

            {currentView === 'home' && (
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="bg-primary hover:bg-amber-600 text-white px-5 py-2 rounded font-semibold transition-colors text-sm">
                Báo Giá
                </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {homeNavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-secondary font-medium hover:text-primary border-b border-gray-50 pb-2"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            
            {user ? (
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="text-sm text-gray-500">Tài khoản: <span className="font-bold text-secondary">{user.name}</span></div>
                {currentView !== 'admin' && (
                    <button 
                        onClick={() => {
                            onNavigate('admin');
                            setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center text-secondary font-bold"
                    >
                        <LayoutDashboard size={18} className="mr-2" /> Quản Lý Dự Án
                    </button>
                )}
                 <button 
                    onClick={() => {
                        onLogout();
                        setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center text-red-500 font-bold"
                >
                    <LogOut size={18} className="mr-2" /> Đăng Xuất
                </button>
              </div>
            ) : (
                 <button 
                    onClick={() => {
                        onNavigate('login');
                        setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center text-primary font-bold pt-2"
                >
                    <LogIn size={18} className="mr-2" /> Đăng Nhập Hệ Thống
                </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;