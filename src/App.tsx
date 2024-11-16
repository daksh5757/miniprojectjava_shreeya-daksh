import { useState } from 'react';
import { SightingForm } from './components/SightingForm';
import { SightingList } from './components/SightingList';
import { Map } from './components/Map';
import { WildlifeSighting } from './types';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [sightings, setSightings] = useState<WildlifeSighting[]>([]);

  const handleAddSighting = (newSighting: Omit<WildlifeSighting, 'id'>) => {
    setSightings([...sightings, { ...newSighting, id: uuidv4() }]);
  };

  const handleDeleteSighting = (id: string) => {
    setSightings(sightings.filter(sighting => sighting.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Wildlife Tracking</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Add New Sighting</h2>
                <SightingForm onSubmit={handleAddSighting} />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Sightings</h2>
                <SightingList sightings={sightings} onDelete={handleDeleteSighting} />
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Sightings Map</h2>
              <Map sightings={sightings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}