var express = require('express');
var router = express.Router();
const { authenticateToken } = require('../middlewares/AuthMiddleware');

var {postIncome,getIncomeById, getIncomeByWalletId, putUpdateIncome, deleteIncomeById} = require("../middlewares/IncomeMiddleware")


router.get("/one/:idIncome", authenticateToken, getIncomeById)
router.get('/:idWallet', authenticateToken, getIncomeByWalletId );
router.post("/", authenticateToken, postIncome)
router.put("/", authenticateToken, putUpdateIncome)
router.delete("/:idIncome", authenticateToken, deleteIncomeById)

module.exports = router;
