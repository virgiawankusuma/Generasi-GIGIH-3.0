const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const songsData = require('./songs');
const artistsData = require('./artists');
const popularSongsData = require('./popular_songs');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/music_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create MongoDB schema and models for songs, artists, and popular_songs collections
const songSchema = new mongoose.Schema({
  title: String,
  artists: [String],
  album: String,
});

const artistSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  genres: [String],
});

const popularSongSchema = new mongoose.Schema({
  title: String,
  playCount: Number,
  period: String,
});

const songs = mongoose.model('songs', songSchema); 
const artists = mongoose.model('artists', artistSchema);
const popularSong = mongoose.model('popular_songs', popularSongSchema);

// Populate the collections with sample data
songs.insertMany(songsData, (err) => {
  if (err) console.error('Error inserting songs:', err);
});

artists.insertMany(artistsData, (err) => {
  if (err) console.error('Error inserting artists:', err);
});

popularSong.insertMany(popularSongsData, (err) => {
  if (err) console.error('Error inserting popular songs:', err);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
