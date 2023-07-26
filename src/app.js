require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DB_URL;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

// Check for DB connection
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Import routes
const videoThumbnailRoutes = require('./routes/videoThumbnailRoutes');
const productListRoutes = require('./routes/productListRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/video-thumbnails', videoThumbnailRoutes);
app.use('/products', productListRoutes);
app.use('/comments', commentRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
