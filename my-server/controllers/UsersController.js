var User = require("../models/User")

exports.index = async(req,res) => {
    try {
      //Encontrar usuários
      const users = await User.find();

      //Retornar usuários
      return res.json(users);
    } catch (error) {
      console.error(error);
     return res.status(500).json({message:"Internal error"})
    }
  }

exports.show = async(req,res) =>  {

    try {
      //Buscar o usuário a partir da url
      const { id } = await req.params;
      console.log(id);
      const user = await User.findById(id);

      //Não foi encontrado
      if(!user){
        return res.status(400).json();
      }
      //Retornar dados do usuário
      return res.json(user);
      
    } catch (error) {
      return res.status(500).json({message:"Internal error"})
    }

  }

exports.create = async(req,res) =>{
    try {
      // Pegar dados do request
      const { name, password, nickname, email, city } = req.body;
      // Verificar email *(FAZER COM NAME E NICK NAME TBM)
      const user = await  User.findOne({email});

      //verificar email
      if(user){

        console.log("Usuário existe")
        return res.status(422).json({message: `User ${email} already exists`})

      }
      //Criar usuário
      const newUser = await User.create({
        name,
        password,
        nickname,
        email,
        city
      });
      //retornar sucesso
      return res.status(201).json();

    } catch (error) {
      console.error(error);
      return res.status(500).json({message:"Internal error"})
    }

  }

exports.update = async(req,res) => {

    try {
      // Pegar id do usuário 
      const { id } = req.params;
      // Pegar dados de atualização
      const { password, nickname, email, city } = req.body;
      // Verificar se tem o usuário
      const user = await User.findById(id);
      if(!user){
        return res.status(404).json();
      }
      //ATUALIZAR CAMPOS
      await user.updateOne({password,nickname,email,city});
      // SUCESSO
      return res.status(200).json();
      
    } catch (error) {
     return res.status(500).json({message:"Internal error"})
    }

  }

exports.destroy = async(req,res) => {

    try {
      
      const { id } = req.params;
      const user = await User.findById(id);

      if(!user){
        return res.status(404).json();
      }

      await user.deleteOne();

      return res.status(200).json();

    } catch (error) {
     return res.status(500).json({message:"Internal error"})
    }

  }

