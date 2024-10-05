const multer = require('multer');
const asyncHandler = require('express-async-handler')
const { S3Client, ListObjectsV2Command, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const BUCKET_NAME = process.env.BUCKET_NAME;
const s3Client = new S3Client({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.ACCESS_SECRET,
    },
    region: process.env.REGION
  });
const upload = multer({ storage: multer.memoryStorage() });

const postImage = [
  upload.single('file'), // Use multer as middleware
  asyncHandler(async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    try {
      const upload = new Upload({
        client: s3Client,
        params: {
          Bucket: BUCKET_NAME,
          Key: req.file.originalname,
          Body: req.file.buffer,
        },
      });

      await upload.done();

      res.send({
        location: `https://${BUCKET_NAME}.s3.amazonaws.com/${req.file.originalname}`,
      });
    } catch (error) {
      console.error('File upload error:', error);
      res.status(500).send('Failed to upload file.');
    }
  }),
];

  const getImage = asyncHandler(async (req, res) => {
    try {
      const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
      const response = await s3Client.send(command);
  
      // Check if response.Contents exists and is not empty
      const files = response.Contents ? response.Contents.map(item => item.Key) : [];
  
      res.send(files);
    } catch (error) {
      console.error('List files error:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  const getByFileName = asyncHandler(async (req, res) => {
    try {
      const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
      const response = await s3Client.send(command);
  
      // Check if response.Contents exists and is not empty
      const files = response.Contents ? response.Contents.map(item => item.Key) : [];
  
      res.send(files);
    } catch (error) {
      console.error('List files error:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  const deleteImage = asyncHandler(async (req, res) => {
    const filename = req.params.filename;
    try {
      const command = new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: filename });
      await s3Client.send(command);
      res.send('File Deleted Successfully');
    } catch (error) {
      console.error('File deletion error:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  module.exports={
    postImage,
    getImage,
    getByFileName,
    deleteImage
  }