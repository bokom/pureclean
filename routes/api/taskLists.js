const express = require('express');
const router = express.Router();

//Task List Model
const TaskList = require('../../models/TaskList');

//@route    GET api/taskLists
//@desc     Get All Task Lists
//@access   Public
router.get('/', (req, res) => {
    TaskList.find()
        .sort({ date: -1})
        .then(taskLists => res.json(taskLists));
});

//@route    POST api/taskLists
//@desc     Create a Task List
//@access   Public
router.post('/', (req, res) => {
    const newTaskList = new TaskList({
        tasks: req.body.tasks,
        week: req.body.week
    });

    newTaskList.save().then(taskList => res.json(taskList));
});

//@route    DELETE api/taskLists/:week
//@desc     Delete a Task List
//@access   Public
router.delete('/:week', (req, res) => {
    TaskList.find({week: req.params.week})
        .then(taskList => taskList[0].remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;