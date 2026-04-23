const express = require('express');
const path = require('path');
const app = express();

// Azure App Service provides the port via process.env.PORT
const PORT = process.env.PORT || 8080;

// Serve static files (like styles.css) from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Send index.html when the root URL is accessed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
