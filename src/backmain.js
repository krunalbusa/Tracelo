const mongose = require('mongoose');



mongose.connect("mongodb://127.0.0.1:27017/Tracelo")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema=new mongose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number ,
        required:true
    }
    
})

const collection = mongose.model('final',newSchema);
module.exports=collection