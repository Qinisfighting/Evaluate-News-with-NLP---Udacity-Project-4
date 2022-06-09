import { checkForPolarity } from "./polarityChecker";

//call function by event listener
function handleSubmit(event) {
  event.preventDefault();

  //add event listener for the form
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);

  //get Value of the input for URL
  let formURL = document.getElementById("url").value;

  // Function to POST data
  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    try {
      // Transform into JSON
      const allData = await response.json();
      // console.log(allData)
      return allData;
    } catch (error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };

  //check if the input  is a valid URL
  if (Client.checkForURL(formURL)) {
    // when the URL is valid, send it to the backend and write updated data to DOM elements
    postData("http://localhost:8082/api", { url: formURL }).then(function (
      res
    ) {
      document.getElementById(
        "text"
      ).textContent = `"...${res.sentence_list[6].text}${res.sentence_list[7].text}.."`;
      document.getElementById("polarity").innerHTML =
        "Polarity: " + checkForPolarity(res.score_tag);
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    });
    // when the URL is not valid, show a alert
  } else {
    alert("Ops, URL seems invalid...");
  }
}
console.log("::: Form Submitted :::");


export { handleSubmit };
