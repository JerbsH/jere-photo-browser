import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { Photo } from '../types/photo';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}
/**
 * Maps all the photos coming from the API to a grid.
 *
 * Replaces image URLs to picsum URLs to fix broken image URLs in API
 * @param photos Photo[], photo data from API that is used to populate list items
 * @param onPhotoClick function to handle what happens when user clicks a photo
 */
export function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const columnCount = isSmallScreen ? 2 : isMediumScreen ? 4 : 6;

  return (
    <div style={{ display: 'flex' }}>
      <ImageList
        sx={{ width: '100%', height: '100%', overflow: 'hidden', padding: 2 }}
        cols={columnCount}
        rowHeight={200}
      >
        {photos.map((item) => (
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
              aria-label={`Open photo ${item.title}`}
              role="button"
              tabIndex={0}
              style={{
                borderRadius: 5,
                height: '100%',
                width: '100%',
                cursor: 'pointer',
              }}
              onClick={() => onPhotoClick(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onPhotoClick(item);
                }
              }}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
