const bcrypt = require('bcrypt');

exports.createHashPassword = async(password) => {
  return await bcrypt.hash(password, 10);
  
}

exports.comparePasswordHash = async (passwordHash,password) => {
  //passwordHash Senha encriptado
  //password Senha recebida para comparar
  return bcrypt.compare(password,passwordHash);
}

