const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        trim: true,
        required: true,
        maxlength:32
    }
   
},
    {timestamps:true}
);



//Virtual Field


module.exports = mongoose.model("Category",categorySchema);