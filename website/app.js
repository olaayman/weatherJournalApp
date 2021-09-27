/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
let apiKey = 'ea95ac7f7f17f9b713074d3efed22cf7';
let UserResponse = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();

//event listener for the generate button
document.getElementById('generate').addEventListener('click', onGenerateClick);

// callback function for the button click
function onGenerateClick(e){
    //get the values og the user entry as the zip id for the API and the feeling about the weather
    UserResponse =  document.getElementById('feelings').value;
    const zipId = document.getElementById('zip').value;

    //call the async function to Acquire API credentials from OpenWeatherMap website 
    getTheWeather(baseURL , zipId,apiKey)
    .then(function(weatherData){
        const temp = weatherData.list[0].main.temp; 
        // post the weatherdata to the server by chainning the promises
        postData('/post', { temperature: temp , date : newDate , user_response : UserResponse });
        //update the UI with the new data
        updateUI();
    })

}

//async function to to Acquire API credentials from OpenWeatherMap website
async function getTheWeather(baseURL , zipId , key){

  const res = await fetch(baseURL + zipId + key);
  try {
    const weatherData = await res.json();
    return weatherData ;

  }  catch(error) {
    console.log("error", error);
  }
}

//async function to post the data to the server
async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  //async function to update  the UI
  async function updateUI(){

    const res = await fetch('/update');
    try {
      const UIData = await res.json();
      console.log(UIData);
      //set the HTML text in the index file with the data retrived from the server
      document.getElementById('date').innerHTML = "the date is:  " + UIData.date;
      document.getElementById('temp').innerHTML = "the temperature is:  " + UIData.temperature;
      document.getElementById('content').innerHTML = "the user feeling is:  " + UIData.user_response;
      return UIData ;
  
    }  catch(error) {
      console.log("error", error);
    }
  }
  