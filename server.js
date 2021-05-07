const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
app.use(express.json()); 

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  });

  app.get("/notes", (req, res) => {
      db.query("SELECT * FROM bulletin_notes", (err, result) => {
       if (err) {
          console.log(err)
        } else {
            res.send(result)
        }   
      }); 
  });

  const listener = app.listen(process.env.PORT || 2000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
