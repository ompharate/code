import React from 'react';
import { CircleDollarSign } from 'lucide-react';

export function Header() {
  const navItems = ['Home', 'Trade Items', 'My Trades', 'Contact'];

  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <CircleDollarSign className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">TradingHub</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-indigo-100 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}