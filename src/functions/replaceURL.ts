import type { Photo } from '../types/photo';

/**
 * Replace invalid photo adresses from API.
 *	All the image addresses will be replaced with a random image from picsum.
 *	Some images will be the same.
 * @param data photo data that has broken URLs
 * @param isSingle Boolean, is the function only handling singe photo
 */
export function replaceURL(data: any, isSingle: boolean) {
  if (isSingle) {
    return (
      (data.thumbnailUrl = `https://picsum.photos/seed/${data.id}/200`),
      (data.url = `https://picsum.photos/seed/${data.id}/1920/1080`)
    );
  } else {
    return data.forEach((photo: Photo) => {
      ((photo.thumbnailUrl = `https://picsum.photos/seed/${photo.id}/200`),
        (photo.url = `https://picsum.photos/seed/${photo.id}/1920/1080`));
    });
  }
}
