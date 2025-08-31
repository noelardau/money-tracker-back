var express = require('express');
var router = express.Router();
var {getIncomeByWalletId, postIncome, putUpdateIncome, deleteIncomeById} = require("../middlewares/IncomeMiddleware")

router.get('/:idWallet', getIncomeByWalletId );
router.post("/", postIncome)
router.put("/", putUpdateIncome)
router.delete("/:idIncome", deleteIncomeById)

module.exports = router;
