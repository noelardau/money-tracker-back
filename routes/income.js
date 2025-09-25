var express = require('express');
var router = express.Router();
var {postIncome,getIncomeById, getIncomeByWalletId, putUpdateIncome, deleteIncomeById} = require("../middlewares/IncomeMiddleware")


router.get("/one/:idIncome", getIncomeById)
router.get('/:idWallet', getIncomeByWalletId );
router.post("/", postIncome)
router.put("/", putUpdateIncome)
router.delete("/:idIncome", deleteIncomeById)

module.exports = router;
