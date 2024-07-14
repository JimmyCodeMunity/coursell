const express = require('express');
const { createUser, getAllUsers, Login } = require('../controller/UserController');

const router = express.Router();
router.use(express.json());

router.use(express.urlencoded({ extended:false}));


router.get('allusers',getAllUsers)

router.post('createuser',createUser)


router.post('/login',Login)


module.exports = router;