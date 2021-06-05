const express = require("express");
// const routes = require('./routes/note');
bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const mysql = require('mysql')
require("dotenv").config();

const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});


app.get('/notes', (req, res) => {
  db.query('SELECT * FROM notes', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
});

app.post('/notes', (req, res) => {
  const insertQuery = 'INSERT INTO notes SET ?';
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Note added to database')
    }
  })
});

const listener = app.listen(process.env.PORT || 2000, () => {
  console.log('App is listening on port ' + listener.address().port)
})
// const dbUri = process.env.MONGODB_URI;
// mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
// .then((result) => app.listen(2000, () => {console.log('Your app is listening on port 2000')}))
// .catch((err) => console.log(err))



// app.use(express.urlencoded({extended: false}));




