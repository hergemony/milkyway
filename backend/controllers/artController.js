const asyncHandler = require('express-async-handler')

const Art = require('../models/ArtModel')
const User = require('../models/userModel')

// @desc    Get Arts
// @route   GET /api/Arts
// @access  Private
const getArts = asyncHandler(async (req, res) => {
  const Arts = await Art.find({ user: req.user.id })

  res.status(200).json(Arts)
})

// @desc    Set Art
// @route   POST /api/Arts
// @access  Private
const setArt = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const Art = await Art.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(Art)
})

// @desc    Update Art
// @route   PUT /api/Arts/:id
// @access  Private
const updateArt = asyncHandler(async (req, res) => {
  const Art = await Art.findById(req.params.id)

  if (!Art) {
    res.status(400)
    throw new Error('Art not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Art user
  if (Art.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedArt = await Art.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedArt)
})

// @desc    Delete Art
// @route   DELETE /api/Arts/:id
// @access  Private
const deleteArt = asyncHandler(async (req, res) => {
  const Art = await Art.findById(req.params.id)

  if (!Art) {
    res.status(400)
    throw new Error('Art not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Art user
  if (Art.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await Art.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getArts,
  setArt,
  updateArt,
  deleteArt,
}