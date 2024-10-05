const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
    {

        shopName: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        shopOwner: {
            type: String,
            required: [true, "Enter the Shop Name"]
        },
        shopMobile:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         shopEmail:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         shopPincode:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         shopAddr:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         shopInstanceId:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         shopAccessToken:{
            type:String,
            required:[true,"Enter the Shop Name"]
         },
         shopLogo:{
            type:String,
            required:[true,"Enter the Shop Name"]
         }

    },
    {
        timestamps: true
    }

)
const ProfileDetails = mongoose.model('ProfileDetails', profileSchema);

module.exports = ProfileDetails