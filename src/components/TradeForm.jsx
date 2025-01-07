import React from 'react';
import { X } from 'lucide-react';


export function TradeForm({ selectedItem, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Propose a Trade</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">Trading for: <span className="font-medium text-gray-900">{selectedItem.name}</span></p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="itemOffered" className="block text-sm font-medium text-gray-700">
            Item You're Offering
          </label>
          <input
            type="text"
            id="itemOffered"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description of Your Item
          </label>
          <textarea
            id="description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Describe your item"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message to Owner
          </label>
          <textarea
            id="message"
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Add a message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Submit Trade Proposal
        </button>
      </form>
    </div>
  );
}