import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">TradingHub</h3>
            <div className="mt-2 flex items-center space-x-4">
              <Mail className="h-4 w-4" />
              <span>support@tradinghub.com</span>
            </div>
            <div className="mt-1 flex items-center space-x-4">
              <Phone className="h-4 w-4" />
              <span>1-800-TRADING</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TradingHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}