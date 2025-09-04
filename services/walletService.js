let prisma = require("../lib/prisma")
let wallet_model = prisma.wallet

let findWalletById = async (idWallet)=>{
  try {
    let wallet = await wallet_model.findUnique({
      where:{
        id: +idWallet
      }
    })

    console.log(wallet);
    

    return wallet
    
  } catch (error) {
    console.log(error);
    
    throw error
  }
}

let findWalletByUserId = async (idUser)=>{
    try {    
          if(idUser == undefined){
            return new Error("idUser is required")
          }

          if(idUser <=0){
            return new Error("The idUser is must > 0")
          }

          let user_wallets = await wallet_model.findMany({
              where: {
                        idUser: idUser
                      }
          })

          return user_wallets  
        } catch (error) {
          throw error         
        }
}

let createWallet = async (new_wallet)=>{
    try { 
          let wallet_created = await wallet_model.create({
              data: {
                      idUser: new_wallet.idUser,
                      name: new_wallet.name,
                      devise: new_wallet.devise,
                      solde: new_wallet.solde
                    }
          })

          return wallet_created    
        } catch (error) {        
        throw console.error(error);
        }
}

let updateWallet = async(wallet_to_update)=>{
    try {
          let wallet_updated = await wallet_model.update({
              data: {

                      name: wallet_to_update.name,
                      devise:wallet_to_update.devise
                    },
              where: {id: wallet_to_update.id}
          })

          return wallet_updated
        } catch (error) {
      throw new Error("error");
        }
}

let deleteWallet = async(idWallet)=>{
    try {
        let wallet_deleted = await wallet_model.delete({ where: {id: +idWallet}})
        return wallet_deleted 
        } catch (error) {
        throw console.error(error);
        }  
}


let soldeUp = async(deleted_expense)=>{
      
      try {      
          
          let wallet_updated = await wallet_model.update({
              data: {
                      solde:  {
                        increment: deleted_expense.value
                      },
                    },
              where: {id: deleted_expense.idWallet}
          })

          return wallet_updated
        } catch (error) {
      throw new Error("error");
        }
}


let soldeDown = async(deleted_expense)=>{
      
      try {      
          
          let wallet_updated = await wallet_model.update({
              data: {
                      solde:  {
                        decrement: deleted_expense.value
                      },
                    },
              where: {id: deleted_expense.idWallet}
          })

          return wallet_updated
        } catch (error) {
      throw new Error("error");
        }
}



module.exports = {
    createWallet,
    findWalletById,
    findWalletByUserId,
    updateWallet,
    deleteWallet,
    soldeUp,
    soldeDown
}