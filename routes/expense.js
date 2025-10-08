var express = require('express');
var router = express.Router();
var {postExpense, getExpenseById, getExpenseByWalletId,putUpdateExpense, deleteExpenseById} = require("../middlewares/ExpenseMiddleware")
var {authenticateToken} = require("../middlewares/AuthMiddleware")

router.get("/one/:idExpense", authenticateToken, getExpenseById)
router.get('/:idWallet', authenticateToken, getExpenseByWalletId );
router.post("/", authenticateToken, postExpense)
router.put("/", authenticateToken, putUpdateExpense)
router.delete("/:idExpense", authenticateToken, deleteExpenseById)

module.exports = router;
