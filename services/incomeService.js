let prisma = require("../lib/prisma")
let income_model = prisma.income


async function findIncomeByWalletId(idWallet) {
    try {    
          if(idWallet == undefined){
            return new Error("idUser is required")
          }

          if(idWallet <=0){
            return new Error("The idUser is must > 0")
          }

          let incomes = await income_model.findMany({
              where: {
                        idWallet: +idWallet
                      }
          })

          return incomes  
        } catch (error) {
          throw error         
        }
}


async function createIncome (newIncome){

    let created_income = await income_model.create({
        data: {
            idWallet: newIncome.idWallet,
            value: newIncome.value,
            description: newIncome.description
        }
    })

    return created_income


}


let updateIncome = async(income_to_update)=>{
    try {
          let income_updated = await income_model.update({
              data: {
                      description: income_to_update.description,
                      value: income_to_update.value,                      
                    },
              where: {id: income_to_update.id}
          })

          return income_updated
        } catch (error) {
      return new Error("error");
        }
}

let deleteIncome = async(id_income)=>{
    try {
        
        let income_deleted = await income_model.delete({ where: {id: +id_income}})
        return income_deleted 

        } catch (error) {
        throw console.error(error);
        }  
}





module.exports = { 
    createIncome, findIncomeByWalletId, updateIncome, deleteIncome
}