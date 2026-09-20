// Tanstack Query to handle state of images and handle errors and loading states
import { useQuery } from '@tanstack/react-query';
import { fetchPhotos, fetchPhoto } from '../services/photosAPI';

export function usePhotos() {
  return useQuery({
    queryKey: ['photos'],
    queryFn: fetchPhotos,
  });
}
export function useSinglePhoto(id: number | null) {
  return useQuery({
    queryKey: ['photos', id],
    queryFn: () => fetchPhoto(id!),
    enabled: id !== null,
  });
}
