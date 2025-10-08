var express = require('express');
var router = express.Router();
const {authenticateToken} = require("../middlewares/AuthMiddleware")

var { postNewWallet, getWalletById, getWalletsByUserId, deleteWalletById, putUpdateWallet, updateSoldeToUp, updateSoldeToDown} = require("../middlewares/walletMiddleware")

router.get("/one/:idWallet",authenticateToken, getWalletById)
router.get('/:idUser',authenticateToken, getWalletsByUserId );
router.post("/",authenticateToken, postNewWallet)
router.put("/",authenticateToken, putUpdateWallet)
router.put("/upSolde",authenticateToken, updateSoldeToUp)
router.put("/downSolde",authenticateToken, updateSoldeToDown)
router.delete("/:idWallet",authenticateToken, deleteWalletById)

module.exports = router;
