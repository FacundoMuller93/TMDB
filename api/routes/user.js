const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');


router.post('/login', passport.authenticate('local'), userController.login);
router.post('/register', userController.register);
router.post('/logout', userController.logout);
router.put('/addFavorites', userController.addFavorites);
router.put('/removeFavorites', userController.removeFavorites);
router.get('/:id', userController.userInfo);


module.exports= router;