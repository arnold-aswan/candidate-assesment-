const express = require('express');
const { getAllMembers, createMember } = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAllMembers);
router.post('/', authMiddleware, createMember);

module.exports = router;
