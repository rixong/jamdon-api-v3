
const express = require('express');
const router = new express.Router;
const User = require('../models/user');
// const Jam = require('../models/jam')
const auth = require('../middleware/auth');

//CREATE USER
router.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.send({user: user.getPublicProfile(), token })
  }
  catch (e) {
    res.status(500).send(e)
  }
})

//LOGIN USER
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken()
    res.send({user, token })
  }
  catch (e) {
    res.status(400).send();
  }
})

//LOGOUT CURRENT USER
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => req.token !== token.token)
    await req.user.save();
    res.send()
  }
  catch (e) {
    res.status(500).send();
  }
})

//LOGOUT ON ALL DEVICES

router.post('/users/logoutAll', auth, async (req, res) => {
  try{
    req.user.tokens = [];
    await req.user.save();
    res.send()
  }
  catch(e){
    res.status(500).send();
  }
})

// GET CURRENT USER
router.get('/users/me', auth, async (req, res) => {
  await req.user.populate('jams').execPopulate();
  console.log(req.user.jams)
  res.send(req.user.jams)
})

//GET ALL USERS
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  }
  catch (e) {
    res.status(500).send()
  }
});

//GET USER BY ID
router.get('/users/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send()
    }
    res.send(user);
  }
  catch (e) {
    res.status(500).send(e);
  }
})
///UPDATE
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['email', 'password', 'firstname', 'lastname', 'instruments', 'genres']
  const isVaildOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isVaildOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }
  try {
    updates.forEach(update => req.user[update] = req.body[update])
    await req.user.save()
    res.send(req.user)
  }
  catch (e) {
    res.status(400).send(e)
  }
})

//USER DELETE
router.delete('/users/:id', auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(user)
  }
  catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;