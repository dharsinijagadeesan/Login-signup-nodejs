// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if ((username === 'admin' && password === 'admin') || (username === 'Dharsini' && password === 'dharsini123@')) {
    res.redirect('/success.html');
  } else {
    res.redirect('/error.html');
  }
});
 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
