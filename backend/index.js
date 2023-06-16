const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('./db/config');
const User = require('./models/User')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/register', async(req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let result;
    const data = await User.find({email:email});
    if(data){
        res.send({"message": "User already exist"});
    }

    bcrypt.hash(password, saltRounds, async function(err, hash) {
        if(err){
            res.send(result);
        }
        else{
            let user = new User({name, email, password:hash});
            result = await user.save();
        }
    });



    res.send(result);
})


//login
/*

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});

*/



app.listen(PORT);