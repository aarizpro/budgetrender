const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
    {

        custName: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        custArea: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        custMobile:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         custEmail:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         custAddr:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         custPincode:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }
    },
    {
        timestamps: true
    }

)
const ClientDetails = mongoose.model('ClientDetails', clientSchema);

module.exports = ClientDetails