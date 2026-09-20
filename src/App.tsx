import './App.css';
import { PhotoGrid } from './components/PhotoGrid';
import { Typography } from '@mui/material';
import type { Photo } from './types/photo';
import { usePhotos } from './hooks/usePhotos';
import { useSearchParams } from 'react-router';
import { PhotoDialog } from './components/PhotoDialog';
import { LoadingSpinner } from './components/LoadingSpinner';
import { replaceURL } from './functions/replaceURL';

function App() {
  const { isPending, error, data } = usePhotos();
  const [searchParams, setSearchParams] = useSearchParams();

  const photoIdParam = searchParams.get('photo');
  const photoId = photoIdParam ? Number(photoIdParam) : null;

  function handlePhotoClick(photo: Photo) {
    setSearchParams({
      photo: String(photo.id),
    });
  }

  function handleClose() {
    setSearchParams({});
  }

  if (isPending) return <LoadingSpinner />;

  if (error) return <p>{'An error has occurred: ' + error.message}</p>;

  if (!isPending && !error) {
    replaceURL(data, false);
  }

  return (
    <>
      <div>
        <Typography variant="h3">Photo-browser</Typography>
      </div>
      <PhotoGrid photos={data ?? []} onPhotoClick={handlePhotoClick} />
      <PhotoDialog photoId={photoId} onClose={handleClose}></PhotoDialog>
    </>
  );
}

export default App;
