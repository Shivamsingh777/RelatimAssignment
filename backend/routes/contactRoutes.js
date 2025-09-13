const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getContacts, addContact } = require('../controllers/contactController');

router.get('/', auth, getContacts);
router.post('/', auth, addContact);

module.exports = router;