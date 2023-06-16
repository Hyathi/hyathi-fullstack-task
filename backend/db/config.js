const mongoose = require("mongoose");
// const connectDB = async()=>{
    mongoose.connect('mongodb://localhost:27017/pokemon')
    .then(()=>{
        console.log(`db connected`);
    })
    .catch((e)=>{
        console.log(e);
        
    })
// }