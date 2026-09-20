import { CircularProgress, Container } from '@mui/material';

/**
 * Currently uses MaterialUI spinner built into separate file to allow further customization.
 * For example if estimated load time would be added.
 */
export function LoadingSpinner() {
  return (
    <Container sx={{ py: 4 }}>
      <CircularProgress aria-label="Loading..." enableTrackSlot size={'3rem'} />
    </Container>
  );
}
