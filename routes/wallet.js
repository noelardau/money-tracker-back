var express = require('express');
var router = express.Router();

var {getWalletsByUserId, postNewWallet, deleteWalletById, putUpdateWallet} = require("../middlewares/walletMiddleware")

router.get('/:idUser', getWalletsByUserId );
router.post("/", postNewWallet)
router.put("/", putUpdateWallet)
router.delete("/:idWallet", deleteWalletById)

module.exports = router;
