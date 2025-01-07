import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ItemList } from './components/ItemList';
import { TradeForm } from './components/TradeForm';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Layout>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Available Items for Trade</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ItemList onSelectItem={setSelectedItem} />
          {selectedItem && (
            <div className="lg:sticky lg:top-6">
              <TradeForm selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;