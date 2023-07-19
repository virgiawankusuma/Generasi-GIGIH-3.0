const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create a playlist array to store the songs
let playlist = [
  {
    title: "Song 1",
    artists: ["Artist 1", "Artist 2"],
    url: "https://spotify.com/track/123456"
  },
  {
    title: "Song 2",
    artists: ["Artist 3"],
    url: "https://spotify.com/track/789012"
  },
  {
    title: "Song 3",
    artists: ["Artist 4", "Artist 5"],
    url: "https://spotify.com/track/345678"
  }
];

// Add a song to the playlist
app.post('/playlist', (req, res) => {
  const { title, artists, url } = req.body;
  const song = { title, artists, url };
  playlist.push(song);
  res.send({
    message: 'Song added successfully',
    data: song
  }).status(201);
});

// Play a song from the playlist
app.get('/playlist/:index', (req, res) => {
  const index = req.params.index;
  const song = playlist[index];
  if (!song) {
    rest.send({
      message: 'Song not found'
    }).status(404);
  } else {
    res.send({
      message: 'Song retrieved successfully',
      data: song,
    }).status(200);
  }
});

// Get the list of songs in the playlist
app.get('/playlist', (req, res) => {
  res.send({
    message: 'Playlist retrieved successfully',
    data: playlist
  }).status(200);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
