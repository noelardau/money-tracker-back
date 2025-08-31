var express = require('express');
var router = express.Router();
var {getExpenseByWalletId, postExpense, putUpdateExpense, deleteExpenseById} = require("../middlewares/ExpenseMiddleware")

router.get('/:idWallet', getExpenseByWalletId );
router.post("/", postExpense)
router.put("/", putUpdateExpense)
router.delete("/:idExpense", deleteExpenseById)

module.exports = router;
