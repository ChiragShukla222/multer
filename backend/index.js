const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const multer=require('multer')
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload=multer({storage:storage});

app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({filename:req.file.originalname});
});


app.listen(5000,()=>{
    console.log("server is running");
})