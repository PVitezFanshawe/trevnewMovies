const express = require('express')
const videoAppController = require('../controllers/videoAppController')
const router = express.Router()

/* GET home page. */
router.get('/', videoAppController.get_all_movies)

// COMMENTS
router.get('/movies/:id/:movie', videoAppController.get_one_movie)

module.exports = router
