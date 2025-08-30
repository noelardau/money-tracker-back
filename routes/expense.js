var express = require('express');
var router = express.Router();
var {getExpenseByWalletId, postExpense, putUpdateExpense, deleteExpense} = require("../middlewares/ExpenseMiddleware")

router.get('/:idWallet', getExpenseByWalletId );
router.post("/", postExpense)
router.put("/", putUpdateExpense)
router.delete("/:idExpense", deleteExpense)

module.exports = router;
