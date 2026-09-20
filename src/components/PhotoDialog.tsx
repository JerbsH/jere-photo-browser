import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSinglePhoto } from '../hooks/usePhotos';
import { replaceURL } from '../functions/replaceURL';

interface PhotoDialogProps {
  photoId: number | null;
  onClose: () => void;
}
/**
 * Creates a card view for selected image with basic information provided by the API.
 * Shows full version of the image.
 * @param photoId number, Id of the photo that will be shown in the dialog
 * @param onClose function to handle closing the dialog
 */
export function PhotoDialog({ photoId, onClose }: PhotoDialogProps) {
  const { isPending, error, data } = useSinglePhoto(photoId);

  return (
    <Dialog open={photoId !== null} onClose={onClose} maxWidth="lg" fullWidth>
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        {isPending && <CircularProgress />}

        {error && <Typography color="error">Failed to load photo.</Typography>}

        {data &&
          (() => {
            replaceURL(data, true);
            return (
              <>
                <DialogTitle>{data.title}</DialogTitle>
                <img
                  src={data.url}
                  alt={data.title}
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />
              </>
            );
          })()}
      </DialogContent>
    </Dialog>
  );
}
