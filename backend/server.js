const express = require('express');
const app = express();
var apecricket = require("ape-cricket");
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
app.use(cors());
const Users = require("./models/users")
app.use(express.json());


const uri = process.env.uri;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.get('/score',(req,res)=>{
   
    const API_KEY = '6zQWYtKe9mXnGmGuhQvR47Tdv9t2';
    
    apecricket.cricket( API_KEY, function(response){ 
        // response will be json data of upcoming cricket matches
        res.status(200).json(JSON.parse(response).data.data);
    });
    

})


    



app.get('/upcoming',(req,res)=>{
    const API_KEY = '6zQWYtKe9mXnGmGuhQvR47Tdv9t2';
    
    apecricket.upcomingMatches( API_KEY, function(response){ 
        // response will be json data of upcoming cricket matches
        console.log(response)
        res.status(200).json(JSON.parse(response).data.matches);
    });
});     
   
app.get('/schedule',(req,res)=>{
      
    const API_KEY = '6zQWYtKe9mXnGmGuhQvR47Tdv9t2';
        apecricket.schedule( API_KEY, function(response){ 
            // response will be json data of upcoming cricket matches
            
            res.status(200).json(JSON.parse(response).data.data);
        });

}); 
   

app.get('/scorecard/:id',(req,res)=>{
    // var qs = url('/scorecard?unique_id={this.props.matches.unique_id}').query()
    const unique_id=req.params.id;
    const API_KEY = '6zQWYtKe9mXnGmGuhQvR47Tdv9t2';
    apecricket.cricketScore( API_KEY, unique_id , function(response){
        
            res.status(200).json(JSON.parse(response).data);
        }
    );  

});

app.route('/signup').post((req, res) => {
    const Username = req.body.username.toString();
    
    const pass = req.body.password;

    const newUser = new Users({
        userName:Username,
        
        password:pass
    });
   
    newUser.save()
    .then(() => {
        res.json('User added!')
      
    })
    .catch(err => {
        res.status(400).json('Error: ' + err);
        console.log(err);
    });
});

app.route('/signin').post((req, res) => {
    
    const userName = req.body.userName;
    const pass = req.body.password;
  
    
    Users.find({userName:userName}).then(user =>
        {
            
            if(user[0].password === pass){
                
                
                res.json({st:"successful"});
            }
            else{
                res.json({st:"unsuccessful"});
            }
        }).catch(err => res.json("Not found!"));

});



app.listen(5050,()=>{
    console.log("Backend connected...");
});