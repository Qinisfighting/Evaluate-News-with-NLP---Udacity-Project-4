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
//Here we are configuring express to use body-parser as middle-ware.
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

//let input = []

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
    //input = req.body.url;
    const apiURL = `${baseURL}key=${API_KEY}&url=${req.body.url}&lang=en`
    const newData = await getAPI(apiURL)
    console.log(newData)
    res.send(newData);
  });


// designates what port the app will listen to for incoming requests
/*app.listen(8080, function () {
    console.log('App listening on port 8080!')
}) */

app.listen(8082, function () {
    console.log('App listening on port 8082!')
})


