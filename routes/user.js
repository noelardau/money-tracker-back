
var express = require('express');
const { authenticateToken } = require('../middlewares/AuthMiddleware');
const {register, login} = require("../middlewares/UserMiddleware")
var router = express.Router();

router.get("/", authenticateToken, (req,res)=>{
    res.send({message: "ok man!!"})
})

router.post("/register", register)
router.post("/login", login)

module.exports = router

