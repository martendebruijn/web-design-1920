const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

// Spotify API key's
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Static assets folder
app.use(express.static('public'));

// Declare template engine and path
app.set('view engine', 'ejs');
app.set('views', 'views');

// Imported functions

// Routes
app.get('/', (req, res) => {
  res.render('home', {});
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
