let prisma = require("../lib/prisma")
let user_model = prisma.user


let createUser = async (newUser)=>{

        let create_new_user = await user_model.create({data:newUser})

        return newUser
}


let findAllUser = async ()=>{

        let all_user = await user_model.findMany()

        return all_user
}



module.exports = {
    createUser, findAllUser
}
