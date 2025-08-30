let {findExpenseByWalletId, createExpense, updateExpense, deleteExpense} = require("../services/expenseService")
let {sendResponse, sendError} = require("../helpers/responseHandler")
 




let getExpenseByWalletId = async (req,res)=>{
    
  try {
    
    let {idWallet} = req.params
    let expenses = await findExpenseByWalletId(idWallet)

    sendResponse(res,expenses,200)  
  } catch (error) {
    
    sendError(res, error)

  }
}



let postExpense = async (req, res)=>{

    try {
    let new_expense = await createExpense(req.body)
  
    sendResponse(res, new_expense,200)
    
  } catch (error) {
    sendError(res, error)
  }


}



let putUpdateExpense = async(req,res)=>{
  try {
    
    let updated_expense = await updateExpense(req.body)
  
    sendResponse(res, updated_expense, 200)
  } catch (error) {
    sendError(res, error)
    
  }
}


let deleteExpenseById = async (req, res)=>{

  try {
    console.log(req.params.idExpense)
    
    // let deleted_expense = await deleteExpense(req.params.idExpense)
    // sendResponse(res, deleted_expense, 200)
    sendResponse(req.params.idExpense)

  } catch (error) {
    sendError(res, error)
  }  
}



module.exports = {
    getExpenseByWalletId,
    postExpense, putUpdateExpense, deleteExpense
}