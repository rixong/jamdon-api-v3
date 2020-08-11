const express = require('express');
const router = new express.Router;
const Jam = require('../models/jam');
const auth = require('../middleware/auth')

//CREATE JAM
router.post('/jams', auth, async (req, res) => {
  console.log(req.user._id)
  const jam = new Jam({
    ...req.body,
    host: req.user._id
  })

  try {
    await jam.save()
    res.send(jam)
  }
  catch (e) {
    res.status(500).send()
  }
})

//GET JAM BY ID
router.get('/jams/:id', async (req, res) => {
  const jam = await Jam.findById(req.params.id);
  await jam.populate('host').execPopulate();
  console.log(jam)
  res.send(jam);
})

//UPDATE JAM
router.patch('/jams/:id', async (req, res) => {

  const allowedUpdates = ['name', 'groupType', 'date', 'location', 'musicians', 'instruments']
  const updates = Object.keys(req.body);
  const isValidField = updates.every(update => allowedUpdates.includes(update));
  const jam = await Jam.findById(req.params.id);
  if (!jam) {
    return res.status(403).send();
  }
  if (!isValidField) {
    return res.status(400).send({ error: 'Invalid update' });
  }
  
  try {
    updates.forEach(update => jam[update] = req.body[update]);
    await jam.save();
    res.send(jam)
  }
  catch (e) {
    res.status(400).send(e);
  }
})


// GET ALL JAMS 
router.get('/jams', async (req, res) => {
  try {
    const jams = await Jam.find(req.body);
    await
      res.send(jams);
  }
  catch (e) {
    res.status(500).send();
  }
})

module.exports = router;