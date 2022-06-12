//use environment variables
const dotenv = require("dotenv");
dotenv.config();

let path = require("path");
const fetch = require("node-fetch");

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Get Route
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve('src/client/views/index.html'))
});

// Personal API Key
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const API_KEY = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);

// Function to GET Web API Data
// Reference: the "//Function to GET Web API Data" code block from last project of my own: https://github.com/Qinisfighting/Weather-Journal-App---Udacity-Project-3/blob/main/website/app.js
const getAPI = async (url = "") => {
  const request = await fetch(url);

  try {
    const allData = await request.json();
    return allData;
  } catch (error) {
    console.log("error", error);
  }
};

app.post("/api", async (req, res) => {
//Build the URL
  const apiURL = `${baseURL}?key=${API_KEY}&url=${req.body.url}&lang=en`;
  const allData = await getAPI(apiURL);
  try {
  res.send(allData);
  console.log(allData);
  }catch (error) {
    console.log("error", error);
  }
});

//designates what port the app will listen to for incoming requests
app.listen(8082, (error) => {
  if (error) throw new Error(error);
  console.log("App listening on port 8082!");
});
