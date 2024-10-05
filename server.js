require ('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const imageUpload = require('./routes/imageUploadRouter');
const profile = require('./routes/profileRoute');
const product = require('./routes/productRoute');
const category = require('./routes/categoryRoute');
const client = require('./routes/clientRoute');
const billing = require('./routes/billingRoute');
const invoice = require('./routes/invoiceRoute');
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT ||3000;
const MONGO_URL = process.env.MONGO_URL;
const BUCKET_NAME= process.env.BUCKET_NAME;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/image',imageUpload);
app.use('/api/profile',profile);
app.use('/api/product',product);
app.use('/api/category',category);
app.use('/api/client',client);
app.use('/api/billing',billing);
app.use('/api/invoice',invoice);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


mongoose.set('strictQuery',false);
mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT,()=>{
        console.log(`Connected to Node Server App running on PORT: ${PORT}`);
    })
}).catch((error)=>{
    console.error("Mongo Connection Error.."+error);
});


app.use((err,req,res,next)=>{
    console.error('Unexpected Error:'+ err);
    res.status(500).send('Internal Error Occured');
});
