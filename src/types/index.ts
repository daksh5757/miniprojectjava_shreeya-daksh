export interface WildlifeSighting {
  id: string;
  species: string;
  location: {
    lat: number;
    lng: number;
  };
  date: Date;
  description: string;
  image?: string;
}