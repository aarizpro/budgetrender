const mongoose = require("mongoose");

const billingSchema = mongoose.Schema(
    {

        billDate: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        billProductName: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        billProductCategory:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billProductPrice:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billCustMob:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billCustAddr:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billCustName:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billCustEmail:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }
         ,
         billCustPincode:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billCustArea:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billQuantity:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billAmount:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billDiscount:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billFinalAmount:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         billInvNumber:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }


    },
    {
        timestamps: true
    }

)
const BillingDetails = mongoose.model('BillingDetails', billingSchema);

module.exports = BillingDetails