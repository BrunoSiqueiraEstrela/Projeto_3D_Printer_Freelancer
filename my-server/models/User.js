var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name:{
    type:String,
    require: true,
    unique: true,
  
  },
  password:{
     type:String,
      required:true
  },
  nickname:{
    type:String,
    require: false,
  },
  email:{
    type:String,
    required: true,
    index:{
      unique:true,
    }
  },
  city:{
    type:String,
    require: true,
  },
},
  {
    timestamps: true
  }

);


module.exports = mongoose.model('User',userSchema);
