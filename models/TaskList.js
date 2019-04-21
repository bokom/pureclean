const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TaskListSchema = new Schema({
    tasks: {
        type: [{
            task: {type: String, required: true},
            person: {type: String, required: true},
            done: {type: Boolean, default: false}
        }],
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = TaskList = mongoose.model('taskList', TaskListSchema);