const mongoose = require('mongoose');


const aSchema = new Schema({
 
      user: {
        type: String,
       
       
    },
    advocate: {
        type: String,
       
    },
    type:{
        type:String,
        default:'policy'
    }
    
}, {
    timestamps: true 
});


module.exports = mongoose.model('policies', aSchema);