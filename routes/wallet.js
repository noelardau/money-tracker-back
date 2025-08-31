var express = require('express');
var router = express.Router();

var {getWalletsByUserId, postNewWallet, deleteWalletById, putUpdateWallet, updateSoldeToUp, updateSoldeToDown} = require("../middlewares/walletMiddleware")

router.get('/:idUser', getWalletsByUserId );
router.post("/", postNewWallet)
router.put("/", putUpdateWallet)
router.put("/upSolde", updateSoldeToUp)
router.put("/downSolde", updateSoldeToDown)
router.delete("/:idWallet", deleteWalletById)

module.exports = router;
