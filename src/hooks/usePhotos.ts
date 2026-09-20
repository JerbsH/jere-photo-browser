// Tanstack Query to handle state of images and handle errors and loading states
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../services/photosAPI';

export function usePhotos() {
  return useQuery({
    queryKey: ['photos'],
    queryFn: fetchPhotos,
  });
}
