//https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response#score_tag

function checkForPolarity(scoreTag) {
    let msg  = '';
    switch (scoreTag) {
      case "P+":
        msg = "STRONG POSITIVE";
        break;
      case "P":
        msg = "POSITIVE";
        break;
      case "NEU":
        msg = "NEUTRAL";
        break;
      case "N":
        msg = "NEGATIVE";
        break;
      case "N+":
        msg = "STRONG NEGATIVE";
        break;
      case "NONE":
        msg = "WITHOUT POLARITY";
    }
    return msg;
  }
  console.log("::: Polarity checked :::");
  
 
  
  function checkForAgreement(agreement){ 
    let msg  = '';
    switch (agreement) {
      case "AGREEMENT":
        msg = " AGREEMENT - The different elements have the same polarity.";
        break;
      case "DISAGREEMENT":
        msg = " DISAGREEMENT - There is disagreement between the different elements.";
        break;

  }
    return msg;
  }
  console.log("::: Agreement checked :::");

  function checkForSubjectivity(subjectivity){ 
    let msg  = '';
    switch (subjectivity) {
      case "OBJECTIVE":
        msg = " OBJECTIVE - The text does not have any subjectivity marks.";
        break;
      case "SUBJECTIVE":
        msg = " SUBJECTIVE - The text has subjective marks.";
        break;

  }
    return msg;
  }
  console.log("::: Subjectivity checked :::");



  function checkForIrony(irony){ 
    let msg  = '';
    switch (irony) {
      case "NONIRONIC":
        msg = " NONIRONIC -  The text does not have any irony marks.";
        break;
      case "IRONIC":
        msg = " IRONIC - The text has irony marks.";
        break;

  }
    return msg;
  }
  console.log("::: Irony checked :::");



  export { checkForPolarity,
           checkForAgreement,
           checkForSubjectivity,
           checkForIrony} ;