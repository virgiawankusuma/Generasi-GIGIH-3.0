const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const uploadDir = path.join(__dirname, 'uploads');

// Ensure the "uploads" directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// POST /upload - Upload a binary file
app.post('/upload', (req, res) => {
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
    return res.status(400).json({ message: 'Invalid request. Only multipart/form-data is allowed.' });
  }

  if (!req.headers['content-length']) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  const contentLength = parseInt(req.headers['content-length'], 10);

  const filePath = path.join(uploadDir, `${Date.now()}-${req.headers['x-file-name']}`);

  const writeStream = fs.createWriteStream(filePath);

  req.pipe(writeStream);

  req.on('end', () => {
    res.status(200).json({ message: 'File uploaded successfully.', file: { path: filePath, size: contentLength } });
  });

  req.on('error', (error) => {
    console.error('Error during file upload:', error);
    res.status(500).json({ message: 'An error occurred during file upload.' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});