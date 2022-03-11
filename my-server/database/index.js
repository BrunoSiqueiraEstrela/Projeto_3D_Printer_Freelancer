var mongoose = require("mongoose");
var dotenv = require("dotenv");

class index{
  constructor(){
    dotenv.config();

try {
      
  this.connection = mongoose.connect(process.env.MONGODB_URI);
  console.log("Connection successful")

} catch (error) {

  console.error(error) 

}
  
  }
}



module.exports = new index;