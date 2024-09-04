const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);

router.post('/news', authMiddleware, newsController.addNews);
router.get('/news', newsController.listNews);

module.exports = router;

