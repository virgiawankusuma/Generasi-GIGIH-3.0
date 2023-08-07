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
const videoThumbsRoutes = require('./routes/videoThumbsRoutes');
const productsRoutes = require('./routes/productsRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/video-thumbs', videoThumbsRoutes);
app.use('/products', productsRoutes);
app.use('/comments', commentRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});
