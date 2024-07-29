const mongoose = require('mongoose');


const appealSchema = mongoose.Schema({
    advId: {
         type: mongoose.Schema.Types.ObjectId,
            ref: "advocates"
    },
      reason: {
        type: String,
        required: true,
       
    },
    reply: {
        type: String,
       
    },
    status: {
        type: String,
        enum: ['Pending', 'Reviewed'],
        default: 'Pending'
    },
    appealStatus:{
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    }
    
}, {
    timestamps: true 
});


module.exports = mongoose.model('appeals', appealSchema);
