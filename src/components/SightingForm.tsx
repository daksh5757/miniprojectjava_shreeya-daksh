import { useState, FormEvent } from 'react';
import { WildlifeSighting } from '../types';

interface SightingFormProps {
  onSubmit: (sighting: Omit<WildlifeSighting, 'id'>) => void;
}

export function SightingForm({ onSubmit }: SightingFormProps) {
  const [species, setSpecies] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      species,
      description,
      location: { lat: parseFloat(lat), lng: parseFloat(lng) },
      date: new Date(),
    });
    setSpecies('');
    setDescription('');
    setLat('');
    setLng('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <div>
        <label htmlFor="species" className="block text-sm font-medium text-gray-700">
          Species
        </label>
        <input
          type="text"
          id="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="lat" className="block text-sm font-medium text-gray-700">
            Latitude
          </label>
          <input
            type="number"
            id="lat"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            step="any"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lng" className="block text-sm font-medium text-gray-700">
            Longitude
          </label>
          <input
            type="number"
            id="lng"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            step="any"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Sighting
      </button>
    </form>
  );
}