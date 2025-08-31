let {findIncomeByWalletId, deleteIncome, updateIncome, createIncome} = require("../services/incomeService")
let {sendResponse, sendError} = require("../helpers/responseHandler")
 




let getIncomeByWalletId = async (req,res)=>{
    
  try {
    
    let {idWallet} = req.params
    let incomes = await findIncomeByWalletId(idWallet)

    sendResponse(res,incomes,200)  
  } catch (error) {
    
    sendError(res, error)

  }
}



let postIncome = async (req, res)=>{

    try {
    let new_income = await createIncome(req.body)
  
    sendResponse(res, new_income,200)
    
  } catch (error) {
    sendError(res, error)
  }


}



let putUpdateIncome = async(req,res)=>{
  try {
    
    let updated_income = await updateIncome(req.body)
  
    sendResponse(res, updated_income, 200)
  } catch (error) {
    sendError(res, error)
    
  }
}


let deleteIncomeById = async (req, res, next)=>{

  try {
    let deleted_income = await deleteIncome(req.params.idIncome)
    sendResponse(res, deleted_income, 200)
    next()

  } catch (error) {
    sendError(res, error)
    next()
  }  
}



module.exports = {
    getIncomeByWalletId,
    postIncome, putUpdateIncome, deleteIncomeById
}