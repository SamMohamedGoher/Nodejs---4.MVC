const express = require(`express`);
const router = express.Router();
const messageController = require(`../controllers/message`);

// GET: /sendMessage
router.get(`/sendMessage`,  messageController.getSendMessage);

// POST: /sendMessage
router.post(`/sendMessage`, messageController.postSendMessage);

module.exports = router;