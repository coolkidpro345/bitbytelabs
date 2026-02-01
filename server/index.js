const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// Simulate all servers down with env var or route
const isDown = process.env.ALL_SERVERS_DOWN === '1';

app.use((req, res, next) => {
  if (isDown) {
    return res.status(521).sendFile(path.join(__dirname, '../public/521.html'));
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));


// Fallback to index.html for SPA main routes
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve login and signup pages
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});
app.get('/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

// 404 for all other routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
