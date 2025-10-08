
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



let {createUser, findAllUser} = require("../services/userService")

let {sendResponse, sendError} = require("../helpers/responseHandler")



let register = async (req, res)=>{
 try {
        const { name, password, email } = req.body;
        const users = await findAllUser()
        
        
        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.name === name)) {
            return res.status(400).json({ message: 'Utilisateur déjà existant' });
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Créer un nouvel utilisateur
        const user = {name, password: hashedPassword, email };
       ;
       let user_created = await createUser(user)

        sendResponse(res,user_created,200)
    } catch (error) {
        sendError(res,error)
    }


}



let login = async (req, res) => {
  const SECRET_KEY = process.env.SECRET_KEY
    try {
        const { name, password } = req.body;
        const users = await findAllUser()
        
        // Trouver l'utilisateur
        const user = users.find(u => u.name === name);
        if (!user) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérifier le mot de passe
        if (await bcrypt.compare(password, user.password)) {
            // Créer le token JWT
            const token = jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, {
                expiresIn: '1h'
            });
            
            res.json({ token });
        } else {
            res.status(400).json({ message: 'Mot de passe incorrect' });
        }
    } catch (error) {
       sendError(res, error);
    }
};





module.exports = {
    register, login
}