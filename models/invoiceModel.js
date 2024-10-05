const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
    {

        invDate: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        invNumber: {
            type: Number,
            required: [true, "Enter the Shop Name"]
        },
        invCustMob:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         invCustName:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         invAmount:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }

    },
    {
        timestamps: true
    }

)
const InvoiceDetails = mongoose.model('InvoiceDetails', invoiceSchema);

module.exports = InvoiceDetails