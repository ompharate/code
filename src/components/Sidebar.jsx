import React from 'react';
import { PlusCircle, BookmarkPlus, History } from 'lucide-react';

export function Sidebar() {
  const sidebarItems = [
    { label: 'Post a New Item', icon: PlusCircle },
    { label: 'My Watchlist', icon: BookmarkPlus },
    { label: 'Trade History', icon: History },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                <Icon className="h-5 w-5 text-indigo-600" />
                <span className="font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}