const express = require("express");
const routes = require('./routes/note');
bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(express.json());


const uri = process.env.MONGODB_URI;


const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});



app.listen(2000, () => {
  console.log('Your app is listening on port 2000')
})
