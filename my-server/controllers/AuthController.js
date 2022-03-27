var User = require("../models/User")
const Auth = require("../services/auth");

exports.login = async (req, res) => {

  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  try {
    //  Buscar usuário pelo email ou name
    let user = await User.findOne({name,nickname,email},{ 
      $or: [{ email: email }, { name: name }]
    });

      if(!user){
      
        return res.status(404).json();
      }

      if(!Auth.comparePasswordHash(user.password,password)){

         return res.status(400).json();
      }

      user.password = undefined;
      
      return res.status(200).json(user);

  }catch(error){
      console.error(error);
      return res.status(500).json({message:"Internal error"})
  }
}