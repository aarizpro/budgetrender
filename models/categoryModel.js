const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {

        categoryCode: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        categoryName: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
         categoryDescription:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         categoryPrice:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }

    },
    {
        timestamps: true
    }

)
const CategoryDetails = mongoose.model('CategoryDetails', categorySchema);

module.exports = CategoryDetails