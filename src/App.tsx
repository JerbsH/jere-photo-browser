import './App.css';
import { PhotoGrid } from './components/PhotoGrid';
import { Typography } from '@mui/material';

function App() {
  return (
    <>
      <div>
        <Typography variant="h1">Photo-browser</Typography>
      </div>
      <PhotoGrid />
    </>
  );
}

export default App;
