const express = require('express');
const router = express.Router();

//Task List Model
const Task = require('../../models/Task');

//@route    GET api/tasks
//@desc     Get All Task Lists
//@access   Public
router.get('/', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks));
});

//@route    POST api/tasks
//@desc     Create a Task List
//@access   Public
router.post('/', (req, res) => {
    const newTask = new Task({
        name: req.body.name,
        interval: req.body.interval,
        work: req.body.work
    });

    newTask.save().then(task => res.json(task));
});

//@route    DELETE api/tasks/:name
//@desc     Delete a Task List
//@access   Public
router.delete('/:name', (req, res) => {
    Task.find({name: req.params.name})
        .then(task => task[0].remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;