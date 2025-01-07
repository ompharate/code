import React from 'react';

const SAMPLE_ITEMS = [
  {
    id: 1,
    name: 'Vintage Camera',
    description: 'A beautifully maintained vintage film camera from the 1960s',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Gaming Console',
    description: 'Latest generation gaming console with two controllers',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Mountain Bike',
    description: 'High-end mountain bike, perfect for trails and adventures',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=600',
  },
];

export function ItemList({ onSelectItem }) {
  return (
    <div className="grid gap-6">
      {SAMPLE_ITEMS.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow "
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="mt-1 text-gray-600">{item.description}</p>
            <button
              onClick={() => onSelectItem(item)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Propose Trade
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
