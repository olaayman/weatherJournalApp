// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
function serverListener(){
    console.log(`server is running on port : ${port}`);
}
const server = app.listen(port,serverListener);

// post function
let data = []
app.post('/post',function(req,res){
    
    projectData.temperature = req.body.temperature;
    projectData.date = req.body.date;
    projectData.user_response = req.body.user_response;
    
    let date1 = new Date();
    console.log(date1);
});

// get function
app.get('/update',(req,res)=>{
    res.send(projectData);
});
