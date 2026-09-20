import { ImageList, ImageListItem } from '@mui/material';
import { usePhotos } from '../hooks/usePhotos';

/**
 * Maps all the photos coming from the API to a grid.
 *
 * Replaces image URLs to picsum URLs to fix broken image URLs in API
 */
export function PhotoGrid() {
  const { isPending, error, data } = usePhotos();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>{'An error has occurred: ' + error.message}</p>;

  // Replace invalid photo adresses from API
  // all the image addresses will be replaced with a random image from picsum
  // some images will be the same
  if (!isPending && !error) {
    data.forEach((photo) => {
      ((photo.thumbnailUrl = `https://picsum.photos/seed/${photo.id}/200`),
        (photo.url = `https://picsum.photos/seed/${photo.id}/`));
    });
  }

  return (
    <div style={{ display: 'flex' }}>
      <ImageList
        sx={{ width: '100%', height: '100%', overflow: 'hidden', padding: 2 }}
        cols={6}
        rowHeight={200}
      >
        {data.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{
              margin: 1,
              border: 3,
              borderRadius: 2,
              ':hover': { scale: 1.1, zIndex: 10 },
            }}
          >
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              style={{ borderRadius: 5, height: '100%', width: '100%' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
