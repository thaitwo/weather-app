const express = require('express');
const path = require('path');
const app = express();

// Tells Express to use the EJS template engine and to look for the templates in the 'views' folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Tells Express to look for the static assets in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// When a GET request is made to the any page (*), render the 'index.ejs' template. From there React will take over.
app.get('*', (req, res) => {
  res.render('index');
})

// Sets the port to local host 8000
const port = process.env.PORT || 8000;
app.listen(port);