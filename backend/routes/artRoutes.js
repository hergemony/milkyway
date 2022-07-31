const express = require('express')
const router = express.Router()
const {
  getArts,
  setArt,
  updateArt,
  deleteArt,
} = require('../controllers/ArtController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getArts).post(protect, setArt)
router.route('/:id').delete(protect, deleteArt).put(protect, updateArt)

module.exports = router