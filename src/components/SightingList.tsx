import { WildlifeSighting } from '../types';
import { format } from 'date-fns';

interface SightingListProps {
  sightings: WildlifeSighting[];
  onDelete: (id: string) => void;
}

export function SightingList({ sightings, onDelete }: SightingListProps) {
  return (
    <div className="space-y-4">
      {sightings.map((sighting) => (
        <div
          key={sighting.id}
          className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{sighting.species}</h3>
            <p className="text-sm text-gray-500">
              {format(sighting.date, 'PPP')} at {format(sighting.date, 'pp')}
            </p>
            <p className="text-gray-700 mt-1">{sighting.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              Location: {sighting.location.lat.toFixed(6)}, {sighting.location.lng.toFixed(6)}
            </p>
          </div>
          <button
            onClick={() => onDelete(sighting.id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}