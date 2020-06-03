const express = require('express');
const router = express.Router();

const {create} =require("../controller/category");
const {requireSignin,isAuth, isAdmin} =require('../controller/auth');
const {userById} =require('../controller/user');
const {userSignupValidator} = require("../validator");

router.post("/category/create/:userId",requireSignin,isAuth,isAdmin,create);

router.param('userId',userById);

module.exports= router;
