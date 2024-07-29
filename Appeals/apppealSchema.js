const mongoose = require('mongoose');


const appealSchema = new Schema({
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
    
}, {
    timestamps: true 
});


module.exports = mongoose.model('appeals', appealSchema);
