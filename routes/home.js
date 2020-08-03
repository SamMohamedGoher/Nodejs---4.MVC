const express = require(`express`);
const messageController = require(`../controllers/message`);
const router = express.Router();

// GET: /
router.get(`/`, messageController.getHome);

module.exports = router;