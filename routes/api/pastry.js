const express = require('express');
const router = express.Router();

// Load Pastry model
const Pastry = require('../../models/Pastry');

// @route GET api/pastry/test
// @description tests pastry route
// @access Public
router.get('/test', (req, res) => res.send('pastry route testing!'));

// @route GET api/pastries
// @description Get all pastries
// @access Public
router.get('/', (req, res) => {
  Pastry.find()
    .then(pastries => res.json(pastries))
    .catch(err => res.status(404).json({ nobooksfound: 'No Pastries found' }));
});

// @route GET api/pastries/:id
// @description Get single pastry by id
// @access Public
router.get('/:id', (req, res) => {
  Pastry.findById(req.params.id)
    .then(book => res.json(pastry))
    .catch(err => res.status(404).json({ nopastryfound: 'No Pastry found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Pastry.create(req.body)
    .then(pastry => res.json({ msg: 'Pastry added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this pastry' }));
});

// @route GET api/pastries/:id
// @description Update pastry
// @access Public
router.put('/:id', (req, res) => {
  Pastry.findByIdAndUpdate(req.params.id, req.body)
    .then(pastry => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/pastries/:id
// @description Delete pastry by id
// @access Public
router.delete('/:id', (req, res) => {
  Pastry.findByIdAndRemove(req.params.id, req.body)
    .then(pastry => res.json({ mgs: 'Pastry entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such pastry' }));
});

module.exports = router;