const ProfileDetails = require('../models/profileModel');
const asyncHandler = require('express-async-handler');

const getProfileDetails = asyncHandler(async(req,res)=>{
    try {
        const profileDetails = await ProfileDetails.find({});
        res.status(200).json(profileDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const createProfile = asyncHandler(async(req,res)=>{
    try {
        const profileDetails = await ProfileDetails.create(req.body);
        res.status(200).json(profileDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const getProfileDetail = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const profileDetails = await ProfileDetails.findById(id);
        res.status(200).json(profileDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const updateProfileDetail = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const profileDetails = await ProfileDetails.findByIdAndUpdate(id,req.body);
        if(!profileDetails){
            res.status(404);
            throw new Error(`Cannot Find the Details with ID${id}`);
        }
        const updatedProfile = await ProfileDetails.findById(id);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const deleteProfileDetail = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const profileDetails = await ProfileDetails.findByIdAndDelete(id);
        if(!profileDetails){
            res.status(404);
            throw new Error(`Cannot Find the Details with ID${id}`);
        }
        
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const getProfilebyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;
    try {
        if (!Array.isArray(field) || !Array.isArray(value)) {
            res.status(400).json({ error: "Fields and values must be arrays" });
            return;
        }
        const query = {};
        field.forEach((f, index) => {
            query[f] = value[index];
        });
        const users = await ProfileDetails.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports={
    getProfilebyField,
    deleteProfileDetail,
    updateProfileDetail,
    getProfileDetail,
    createProfile,
    getProfileDetails
}


