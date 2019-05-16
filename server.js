const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

//DB connection
const db = require('./keys').mongoURI;

//connection
mongoose.connect(db,  { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

//PORT
const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));

