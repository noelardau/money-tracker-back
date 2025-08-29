


let {findWalletByUserId, createWallet, updateWallet, deleteWallet} = require("../services/walletService")

let {sendResponse, sendError} = require("../helpers/responseHandler")


let getWalletsByUserId = async (req,res)=>{
    let {idUser} = req.params

    let wallets_user = await findWalletByUserId(idUser)

    sendResponse(res,wallets_user,200)

    

}

let postNewWallet = async (req, res)=>{

  let new_wallet = await createWallet(req.body)

  sendResponse(res, new_wallet,200)



}


let putUpdateWallet = async(req,res)=>{

  let updated_wallet = await updateWallet(req.body)

  sendResponse(res, updated_wallet, 200)

}


let deleteWalletById = async (req, res)=>{

  let deleted_wallet = await deleteWallet(req.params.idWallet)

  sendResponse(res, deleted_wallet, 200)

}

module.exports = {
    getWalletsByUserId,
    postNewWallet,
    putUpdateWallet,
    deleteWalletById
}

