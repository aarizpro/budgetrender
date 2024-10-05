const express = require('express');
const { 
    postImage,
    getImage,
    getByFileName,
    deleteImage
        }= require('../controller/imageUploadController');

const router = express.Router();

router.post('/upload',postImage);
router.get('/',getImage);
router.get('/download/:filename',getByFileName);
router.delete('/delete/:filename',deleteImage);

module.exports = router;