const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    interval: {
        type: Number,
        required: true
    },
    work: {
        type: Number,
        required: true
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);