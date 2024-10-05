const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {

        productCode: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        productName: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        productCategory:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         productDescription:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         productPrice:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }

    },
    {
        timestamps: true
    }

)
const ProductDetails = mongoose.model('ProductDetails', productSchema);

module.exports = ProductDetails