const express = require("express");
const router = express.Router();
const {userSignUp, userLogin, getUser, getAllUser} = require("../controller/user");

router.post("/signUp",userSignUp)
router.post("/login", userLogin)
router.get("/user/:id", getUser)
router.get("/allUser", getAllUser)

module.exports=router;