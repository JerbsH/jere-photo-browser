# Photo Browser

A lightweight React + TypeScript photo gallery that loads images from the JSONPlaceholder API and lets users browse them in a responsive grid.

## Features

- Displays a grid of photo thumbnails from a public API
- Opens a larger photo view when a thumbnail is selected
- Shows photo metadata such as album ID and photo ID
- Lets users copy the selected photo URL to their clipboard
- Keeps the selected photo in sync with the URL query string
- Includes loading and error states during data fetches

## Tech stack

- React
- TypeScript
- Vite
- Material UI
- TanStack Query
- React Router

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal.

## Available scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Data source

This app uses the JSONPlaceholder API for photo data:

- `https://jsonplaceholder.typicode.com/photos`

The app fetches the list of photos and displays individual details when a photo is opened.

## Usage notes

Selecting a photo adds a query parameter to the URL, such as:

```text
?photo=42
```

This keeps the selected photo state shareable and makes it possible to open a specific image directly.
