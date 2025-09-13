const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getMessagesWithUser, sendMessage } = require('../controllers/messageController');

router.get('/:otherId', auth, getMessagesWithUser); // chat history with user otherId
router.post('/', auth, sendMessage); // { receiver_id, content }

module.exports = router;