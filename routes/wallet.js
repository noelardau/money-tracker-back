var express = require('express');
var router = express.Router();

let prisma = require("../lib/prisma")


router.get('/:idUser', async function(req, res, next) {
   let {idUser} = req.params

   let message = {
    success: "wallets of user " + idUser,
    error: "no wallets found for user " + idUser
   }
  
   let user_wallets = await prisma.wallet.findMany({
    where: {
      idUser: +idUser
    }
   })

   res.send({
    body: user_wallets,
    message: message.success
   })

});


router.post("/", async (req, res)=>{

  let {idUser, name} = req.body
  console.log(req.body);
  
  let message = {
    success: "wallet created successfully",
    error: "an error was occured!"
  }


  let wallet_created = await prisma.wallet.create({
    data: {
      idUser,
      name
    }
  })



  res.send({
    body: wallet_created,
    message: message.success
  })



})



router.put("/", async (req, res)=>{
   let { id,name,solde} = req.body

  
  let message = {
    success: "wallet updated successfully",
    error: "an error was occured!"
  }


  let wallet_updated = await prisma.wallet.update({
    data: {
      solde,
      name
    },
    where: {id}
  })



  res.send({
    body: wallet_updated,
    message: message.success
  })

})

router.delete("/:idWallet", async (req, res)=>{

  let wallet_deleted = await prisma.wallet.delete({ where: {id: +req.params.idWallet}})

  res.send({message: "wallet id n°" + req.params.idWallet + " deleted succesfully !!"})

})

module.exports = router;
