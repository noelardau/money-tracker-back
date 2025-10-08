var express = require('express');
var router = express.Router();
const {authenticateToken} = require("../middlewares/AuthMiddleware")

var { postNewWallet, getWalletById, getWalletsByUserId, deleteWalletById, putUpdateWallet, updateSoldeToUp, updateSoldeToDown} = require("../middlewares/walletMiddleware")

router.get("/one/:idWallet", getWalletById)
router.get('/:idUser', getWalletsByUserId );
router.post("/",authenticateToken, postNewWallet)
router.put("/", putUpdateWallet)
router.put("/upSolde", updateSoldeToUp)
router.put("/downSolde", updateSoldeToDown)
router.delete("/:idWallet", deleteWalletById)

module.exports = router;
