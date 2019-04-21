const express = require('express');
const router = express.Router();

//Person List Model
const Person = require('../../models/Person');

//@route    GET api/persons
//@desc     Get All Person Lists
//@access   Public
router.get('/', (req, res) => {
    Person.find()
        .then(persons => res.json(persons));
});

//@route    POST api/persons
//@desc     Create a Person List
//@access   Public
router.post('/', (req, res) => {
    const newPerson = new Person({
        name: req.body.name,
        interval: req.body.interval,
        work: req.body.work
    });

    newPerson.save().then(person => res.json(person));
});

//@route    DELETE api/persons/:name
//@desc     Delete a Person List
//@access   Public
router.delete('/:name', (req, res) => {
    Person.find({name: req.params.name})
        .then(person => person[0].remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;