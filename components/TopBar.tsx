import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="bg-secondary text-gray-300 py-2 text-xs md:text-sm hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 hover:text-primary cursor-pointer transition-colors">
            <Phone size={14} />
            <span>{CONTACT_PHONE}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-primary cursor-pointer transition-colors">
            <Mail size={14} />
            <span>{CONTACT_EMAIL}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={16} /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;