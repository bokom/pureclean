const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Routes
const items = require('./routes/api/items');
const taskLists = require('./routes/api/taskLists');
const tasks = require('./routes/api/tasks');
const persons = require('./routes/api/persons');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//Use Routes
app.use('/api/items', items);
app.use('/api/taskLists', taskLists);
app.use('/api/tasks', taskLists);
app.use('/api/persons', taskLists);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}...`))

    