const mongoose = require("mongoose");
const { Schema } = mongoose;
const complaintSchema = new Schema(
    {
       
        advId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "advocates"
            },
            userId:{
              type: mongoose.Schema.Types.ObjectId,
              ref: "users"
            
            },
          date:{
              type: Date,
              required: true,
            },
        
        complaint: {
            type: String,
            required:true

        },
        actionTaken: {
            type: String
           
        }
    })
const complaint = mongoose.model("complaints", complaintSchema);
module.exports = complaint;