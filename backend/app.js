const express = require('express');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const app = express();

mongoose.connect("mongodb+srv://toantra_2106:anhtoan123@cluster0.bmshs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection failed');
})
;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use((req ,res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
     'POST,GET,PUT,PATCH,DELETE,OPTIONS'
     );
  next();
});

app.use('/api/posts',postsRoutes);

module.exports = app;
