let prisma = require("../lib/prisma")
let expense_model = prisma.expense


async function findExpenseByWalletId(idWallet) {
    try {    
          if(idWallet == undefined){
            return new Error("idUser is required")
          }

          if(idWallet <=0){
            return new Error("The idUser is must > 0")
          }

          let expenses = await expense_model.findMany({
              where: {
                        idWallet: +idWallet
                      }
          })

          return expenses  
        } catch (error) {
          throw error         
        }
}


async function createExpense (newExpense){

    let created_expense = await expense_model.create({
        data: {
            idWallet: newExpense.idWallet,
            value: newExpense.value,
            description: newExpense.description
        }
    })

    return created_expense


}


let updateExpense = async(expense_to_update)=>{
    try {
          let expense_updated = await expense_model.update({
              data: {
                      description: expense_to_update.description,
                      value: expense_to_update.value,                      
                    },
              where: {id: expense_to_update.id}
          })

          return expense_updated_updated
        } catch (error) {
      throw new Error("error");
        }
}

let deleteExpense = async(id_expense)=>{
    try {
        
        let expense_deleted = await expense_model.delete({ where: {id: +id_expense}})
        return expense_deleted 

        } catch (error) {
        throw console.error(error);
        }  
}





module.exports = { 
    createExpense, findExpenseByWalletId, updateExpense, deleteExpense
}