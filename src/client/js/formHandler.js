
import { checkForPolarity } from "./polarityChecker"
import { checkForURL } from "./urlChecker"

//get Value of the input for URL
let formURL = document.getElementById('url').value

//add event listener for the form
const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

//call function by event listener
function handleSubmit(event) {
    event.preventDefault(); 

// check if the input  is a valid URL

if (Client.checkForURL(formURL) !== true) {

    alert('Ops, URL seems invalid...');
    return;
}
}
    const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response;
  };

        postData('http://localhost:8082/api', {url: formURL})
        .then(function(res) {
            document.getElementById('polarity').innerHTML = 'Polarity: '+checkForPolarity(res.score_tag);
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        })

        export { handleSubmit }
        export { checkForPolarity }
        export { checkForURL }

