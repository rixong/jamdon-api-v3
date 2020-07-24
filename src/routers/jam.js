const express = require('express');
const router = new express.Router;
const Jam = require('../models/jam');

//CREATE JAM
router.post('/jams', async (req, res) => {
  console.log(req.body)
  const jam = new Jam(req.body)
  try {
    await jam.save()
    res.send(jam)
  }
  catch (e) {
    res.status(500).send()
  }
})

//UPDATE JAM
router.patch('/jams/:id', async (req, res) => {

  const allowedUpdates = ['name', 'groupType', 'date', 'location', 'musicians', 'instruments']
  const updates = Object.keys(req.body);
  const isValidField = updates.every(update => allowedUpdates.includes(update));
console.log('Valid', isValidField)
  const jam = await Jam.findById(req.params.id);
  console.log(jam);
  try {
    res.send(jam)
  }
  catch{

  }
})


// GET ALL JAMS 
router.get('/jams', async (req, res) => {
  console.log('Here')
  try {
    const jams = await Jam.find({});
    res.send(jams);
  }
  catch (e) {
    res.status(500).send();
  }
})

module.exports = router;