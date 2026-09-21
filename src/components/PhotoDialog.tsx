import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSinglePhoto } from '../hooks/usePhotos';
import { replaceURL } from '../functions/replaceURL';
import { blue, grey } from '@mui/material/colors';
import { Link } from '@mui/icons-material';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setOpen(true);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  return (
    <Dialog
      open={photoId !== null}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      aria-labelledby="photo-dialog-title"
    >
      <IconButton
        onClick={onClose}
        aria-label="Close photo dialog"
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
        {isPending && <CircularProgress aria-label="Loading photo" />}

        {error && <Typography color="error">Failed to load photo.</Typography>}

        {data &&
          (() => {
            replaceURL(data, true);
            return (
              <>
                <DialogTitle id="photo-dialog-title">{data.title}</DialogTitle>
                <img
                  src={data.url}
                  alt={data.title}
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />
                <DialogContent>
                  <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <DialogContentText>
                        Album: {data.albumId}
                      </DialogContentText>
                      <DialogContentText>Photo Id: {data.id}</DialogContentText>
                    </div>
                    <div style={{ position: 'absolute', right: '2rem' }}>
                      <Button
                        onClick={copyURL}
                        aria-label="Copy photo link"
                        sx={{ background: blue[200], color: grey[800] }}
                        endIcon={<Link sx={{ color: grey[800] }} />}
                      >
                        Copy Link
                      </Button>
                      <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={() => {
                          setOpen(false);
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                      >
                        <Alert
                          onClose={() => setOpen(false)}
                          severity="success"
                          variant="filled"
                        >
                          Link Copied!
                        </Alert>
                      </Snackbar>
                    </div>
                  </div>
                </DialogContent>
              </>
            );
          })()}
      </DialogContent>
    </Dialog>
  );
}
