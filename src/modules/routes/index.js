const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const visitRoutes = require('./visit');

router.use('/user', userRoutes);
router.use('/visit', visitRoutes);

module.exports = router;