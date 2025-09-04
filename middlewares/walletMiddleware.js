let { createWallet,findWalletById, findWalletByUserId, updateWallet, deleteWallet, soldeUp, soldeDown} = require("../services/walletService")
let {sendResponse, sendError} = require("../helpers/responseHandler")

let getWalletById = async (req,res)=>{
try {
    
    let {idWallet} = req.params
    console.log(idWallet);
    
    let wallet = await findWalletById(idWallet)

    sendResponse(res,wallet,200)  
  } catch (error) {
    
    sendError(res, error)

  }

}


let getWalletsByUserId = async (req,res)=>{
    
  try {
    
    let {idUser} = req.params
    let wallets_user = await findWalletByUserId(idUser)

    sendResponse(res,wallets_user,200)  
  } catch (error) {
    
    sendError(res, error)

  }
}

let postNewWallet = async (req, res)=>{
  try {
    let new_wallet = await createWallet(req.body)
  
    sendResponse(res, new_wallet,200)
    
  } catch (error) {
    sendError(res, error)
  }
}


let putUpdateWallet = async(req,res)=>{
  try {
    
    let updated_wallet = await updateWallet(req.body)
  
    sendResponse(res, updated_wallet, 200)
  } catch (error) {
    sendError(res, error)
    
  }
}


let deleteWalletById = async (req, res,next)=>{

  try {
    
    let deleted_wallet = await deleteWallet(req.params.idWallet)
    
    sendResponse(res, deleted_wallet, 200)
    next()

  } catch (error) {
    sendError(res, error)
    next()
  }  
}


let updateSoldeToUp = async(req,res)=>{

   try {
    
    let updated_wallet = await soldeUp(req.body)
  
    sendResponse(res, updated_wallet, 200)
  } catch (error) {
    sendError(res, error)
    
  }


}


let updateSoldeToDown = async(req,res)=>{

   try {
    
    let updated_wallet = await soldeDown(req.body)
  
    sendResponse(res, updated_wallet, 200)
  } catch (error) {
    sendError(res, error)
    
  }


}

module.exports = {
    postNewWallet,
    getWalletById,
    getWalletsByUserId,
    putUpdateWallet,
    deleteWalletById,
    updateSoldeToUp,
    updateSoldeToDown
}

