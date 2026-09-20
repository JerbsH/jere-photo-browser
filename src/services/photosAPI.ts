// Fetching logic for photo API
import type { Photo } from '../types/photo';

const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPhotos(): Promise<Photo[]> {
  const response = await fetch(`${API_URL}/photos`);

  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }

  return response.json();
}

export async function fetchPhoto(id: number): Promise<Photo> {
  const response = await fetch(`${API_URL}/photos/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }

  return response.json();
}
