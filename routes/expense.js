var express = require('express');
var router = express.Router();
var {postExpense, getExpenseById, getExpenseByWalletId,putUpdateExpense, deleteExpenseById} = require("../middlewares/ExpenseMiddleware")

router.get("/one/:idExpense", getExpenseById)
router.get('/:idWallet', getExpenseByWalletId );
router.post("/", postExpense)
router.put("/", putUpdateExpense)
router.delete("/:idExpense", deleteExpenseById)

module.exports = router;
