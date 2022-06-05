//use environment variables
const dotenv = require('dotenv')
dotenv.config()

let path = require('path')
const fetch = require('node-fetch')

// Require Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

// Get Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


// Personal API Key
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const API_KEY = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`)


// Post Route
let formInput = []
app.post('/api', async function(req, res) {
    //GET the url from the request body
    formInput = req.body.url
    //Build the URL
    const apiURL = `${baseURL}?key=${API_KEY}&url=${req.body.url}&lang=en`
    //Fetch Data from API
    const response = await fetch(apiURL)
    const newData = await response.json()
    console.log(newData)
    res.send(newData);
})

// designates what port the app will listen to for incoming requests
app.listen(8082, (error) => {
  if (error) throw new Error(error)
  console.log('App listening on port 8082!')
})






