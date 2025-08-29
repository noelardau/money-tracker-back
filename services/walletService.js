let prisma = require("../lib/prisma")
let wallet_service = prisma.wallet

let findWalletByUserId = async (idUser)=>{
    try {    
          if(idUser == undefined){
            return new Error("idUser is required")
          }

          if(idUser <=0){
            return new Error("The idUser is must > 0")
          }

          let user_wallets = await wallet_service.findMany({
              where: {
                        idUser: +idUser
                      }
          })

          return user_wallets  
        } catch (error) {
          throw error         
        }
}

let createWallet = async (new_wallet)=>{
    try { 
          let wallet_created = await wallet_service.create({
              data: {
                      idUser: new_wallet.idUser,
                      name: new_wallet.name
                    }
          })

          return wallet_created    
        } catch (error) {        
        throw console.error(error);
        }
}

let updateWallet = async(wallet_to_update)=>{
    try {
          let wallet_updated = await prisma.wallet.update({
              data: {
                      solde: wallet_to_update.solde,
                      name: wallet_to_update.name
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
        let wallet_deleted = await prisma.wallet.delete({ where: {id: +idWallet}})
        return wallet_deleted 
        } catch (error) {
        throw console.error(error);
        }  
}

module.exports = {
    findWalletByUserId,
    createWallet,
    updateWallet,
    deleteWallet
}