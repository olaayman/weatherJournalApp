# Weather-Journal App Project

## Project Description 
Web page to aquire the weather and the user feeling about the weather then show it dynamically using an asynchronous web app that uses Web API and user data to dynamically update the UI with the weather info
### client side code (app.js)
* add event listeners to the generate button click
* when the button is clicked Acquire API credentials from OpenWeatherMap website by calling the get async function.
* using ` .then() ` to chain the promises and call the post async function to send the weather and the user input to the server 
* then call the ` updateUI() ` async function in ` .then() ` to get the data from the server and update the UI with it .

### server side code (server.js)
* Require Express to run server and routes 
* make an app instance from express ` const app = express(); `
* require the middle-ware body-parser and cors
* configure the middle-ware using ` app.use() `
* set up the server by declaring a port and then ` const server = app.listen(port,serverListener); `
* make post and get functions using ` app.get(url , function(req,res)) ` and ` app.post(url , function(req,res)) ` to get and post the data from and to the client side code


## how to run the project
1. clone the project into your local PC.
2. make sure you have node installed or install it from this website https://nodejs.org/en/download/
3. open the folder you cloned and make sure the terminal directory is at that folder 
4. write in the terminal `node server.js`
5. then open http://localhost:8080/ 

## technologies used in the project
* HTML
* css
* javascript

#### author's name
It is a project in the web development nanodegree by udacity and modified by Ola Ayman.

