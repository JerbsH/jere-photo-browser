// Fetching logic for photo API
import type { Photo } from '../types/photo';

export async function fetchPhotos(): Promise<Photo[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');

  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }

  return response.json();
}
