var express = require('express');
var router = express.Router();
var {getExpenseById, getExpenseByWalletId, postExpense, putUpdateExpense, deleteExpenseById} = require("../middlewares/ExpenseMiddleware")

router.get("/one/:idExpense", getExpenseById)
router.get('/:idWallet', getExpenseByWalletId );
router.post("/", postExpense)
router.put("/", putUpdateExpense)
router.delete("/:idExpense", deleteExpenseById)

module.exports = router;
