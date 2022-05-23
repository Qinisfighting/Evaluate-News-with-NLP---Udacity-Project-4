//use environment variables
const dotenv = require('dotenv')
dotenv.config();

let path = require('path')
const fetch = require('node-fetch')

// Require Express to run server and routes
const express = require('express');
1
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


// Personal API Key
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const API_KEY = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);


// Fetch Data from API
getAPI = async function (url = "") {
    const response = await fetch(url);
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  }; 

// Send it to the client
app.post('/api', async function(req, res) {
    const apiURL = `${baseURL}key=${API_KEY}&url=${req.body.url}&lang=en`
    const newData = await getAPI(apiURL)
    console.log(newData)
    res.send(newData);
  });

  app.listen(8082, function () {
    console.log('App listening on port 8082!')
})





/*Boiler template
const formdata = new FormData();
formdata.append("key", "YOUR API KEY");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));
 */



// designates what port the app will listen to for incoming requests

