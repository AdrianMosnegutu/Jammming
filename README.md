# Jammming

## Overview

Jammming is a web application that allows users to search for songs, listen to previews, and create custom playlists. Users can filter their search by track, artist, album, or genre.

Once they've selected their favorite tracks, they can customize the playlist by adding a cover image, setting the name, writing a description, and choosing the privacy preference (public/private). The created playlist can then be exported directly to the user's Spotify account.

Users can log in using their Spotify credentials.

The web app is available [here](https://jammming-adrian-mosnegutu.netlify.app)

## Features

- **Search & Filter:** Find songs using filters such as track, artist, album, or genre.
- **Listen to Previews:** Listen to a short preview of the songs before adding them to your playlist. Not all songs have previews!
- **Create Custom Playlists:**
  - Choose a playlist cover.
  - Set the playlist name and description.
  - Choose privacy settings (Public/Private).
- **Spotify Integration:**
  - Log in with your Spotify account.
  - Export your custom playlist directly to Spotify.

## Getting Started

### Prerequisites

- Use the Vite development environment.
- A [Spotify account](https://www.spotify.com/signup) is required to use the app.
- Obtain a Spotify API key by registering your application on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AdrianMosnegutu/jammming.git
   ```

2. Navigate to the project directory:

   ```bash
   cd jammming
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Create a .env file in the root directory and add your Spotify API credentials:

   ```env
   VITE_CLIENT_ID=your_client_id
   ```

   You only need to add the Client ID since this project uses the authorization code flow with PKCE.

5. In [constants.js](/src/utils/constants.js), modify the redirect uri to that of your application.

   ```js
   export const REDIRECT_URI = your_applicaion_redirect_uri;
   ```

### Running the app

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to <http://localhost:5173> to use the app

## Screenshots

### Login Page

![login page](/screenshots/LoginPage.jpeg)

### Search Results

![search results](/screenshots/SearchResults.jpeg)

### Track Preview Playback

![track preview playback](/screenshots/TrackPreviewPlayback.jpeg)

### Playlist Creation

![playlist creation](/screenshots/PlaylistCreation.jpeg)
![playlist on spotify](/screenshots/SpotifyPlaylist.png)

## Technologies used

- **React**: Frontend framework for building the user interface.
- **Vite**: Fast development server and build tool for modern web projects.
- **Spotify Web API**: Used to fetch song data and manage playlists.
- **Node.js** and **axios**: Backend for handling API requests.
- **Tailwindcss**: Utility-first CSS framework that provides low-level utility classes to build custom designs directly in your HTML.
- **OAuth 2.0**: For authenticating with Spotify.

## Contributing

If you’d like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature/YourFeature).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledgments

- Spotify for providing the API and music streaming platform.
- The open-source community for providing tools and resources.

## Contact

For any inquiries or support, please contact [me](https://github.com/AdrianMosnegutu).
