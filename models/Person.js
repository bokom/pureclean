const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    work: {
        type: Number,
        required: true
    },
    penalty: {
        type: Number,
        required: true
    }
});

module.exports = Person = mongoose.model('person', PersonSchema);