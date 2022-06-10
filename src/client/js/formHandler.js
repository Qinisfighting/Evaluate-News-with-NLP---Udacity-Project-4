import { checkForPolarity } from "./allChecker";
import { checkForAgreement } from "./allChecker";
import { checkForSubjectivity } from "./allChecker";
import { checkForIrony } from "./allChecker";




//call function by event listener
function handleSubmit(event) {
  event.preventDefault();

  //add event listener for the form
  const form = document.querySelector("#form");
  form.addEventListener("submit", handleSubmit);

  //get Value of the input for URL
  let userURL = document.querySelector("#url").value;

  //check if the input  is a valid URL
  if (!Client.checkForURL(userURL)) {
    alert("Ops, URL seems invalid...!");
    return;
  }


  // Function to POST data
  // Reference 1: https://www.codegrepper.com/code-examples/javascript/js+new+promise+fetch+post+data
  // Reference 2: the "//Function to POST data" code block from last project of my own: https://github.com/Qinisfighting/Weather-Journal-App---Udacity-Project-3/blob/main/website/app.js
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response;
  };

// Reference: https://www.codegrepper.com/code-examples/javascript/js+new+promise+fetch+post+data
 postData("http://localhost:8082/api", { url: userURL })

    .then((res) => res.json())
    .then(( res ) => {
     console.log(res);
    // using textContent instead of innerHTML to avoid text with Hyperlink displays as Hyperlink content
      document.querySelector(
        "#text"
      ).textContent = "..." + res.sentence_list[6].text + res.sentence_list[7].text + "..";
      document.querySelector(
        "#polarity").textContent =
        "Polarity: " + checkForPolarity(res.score_tag);
      document.querySelector(
        "#agreement"
      ).textContent = "Agreement:" + checkForAgreement(res.agreement);
      document.querySelector(
        "#subjectivity"
      ).textContent = "Subjectivity:" + checkForSubjectivity(res.subjectivity);
      document.querySelector(
        "#confidence"
      ).textContent = "Confidence:" + res.confidence + " - The value represents the confidence associated with the sentiment analysis performed on the text, it is an integer number in the 0-100 range.";
      document.querySelector(
        "#irony").textContent = "Irony:" + checkForIrony(res.irony);
    });

    

  }
 
  

console.log("::: Form Submitted :::");
export { handleSubmit };
