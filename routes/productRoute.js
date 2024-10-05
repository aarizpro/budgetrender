const express = require("express");
const{
    getProfilebyField,
    deleteProfileDetail,
    updateProfileDetail,
    getProfileDetail,
    createProfile,
    getProfileDetails
}= require("../controller/productController");
const router = express.Router();

router.get('/',getProfileDetails);
router.get('/search', getProfilebyField);
router.get('/:id',getProfileDetail);
router.put('/:id',updateProfileDetail);
router.delete('/:id',deleteProfileDetail);
router.post('/', createProfile);
module.exports = router;