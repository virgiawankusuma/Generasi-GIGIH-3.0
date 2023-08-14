require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoString = process.env.DB_URL;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());

// Check for DB connection
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Import routes
const videoRoutes = require('./routes/videosRoutes');
const productsRoutes = require('./routes/productsRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/videos', videoRoutes);
app.use('/products', productsRoutes);
app.use('/comments', commentRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});
