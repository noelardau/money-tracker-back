var express = require('express');
var router = express.Router();

let prisma = require("../lib/prisma")


router.get('/:id_user', function(req, res, next) {
  res.send({
    id: req.params.id_user,
    message: "salut"
  })
});

router.post("/", async (req, res)=>{

  let {id_user, name} = req.body
  console.log(req.body);
  
  let message = {
    success: "wallet created successfully",
    error: "an error was occured!"
  }


  // let wallet_created = await prisma.wallet.create({
  //   data: {
  //     idUser: id_user,
  //     name: name
  //   }
  // })

res.end()  

  // res.send({
  //   body: wallet_created,
  //   message: message.success
  // })



})

module.exports = router;
