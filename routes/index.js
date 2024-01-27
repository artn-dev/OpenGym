const express = require('express');
const router = express.Router();

const { homeView } = require('../controllers/index.js');

router.get('/', homeView);

module.exports = router;