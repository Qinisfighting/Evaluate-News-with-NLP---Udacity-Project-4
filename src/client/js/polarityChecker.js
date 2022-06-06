//https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response#score_tag

function checkForPolarity(scoreTag) {
    let msg;
    switch (scoreTag) {
      case "P+":
        msg = "STRONG POSITIVE";
        break;
      case "P":
        msg = "POSITIVE";
        break;
      case "NEW":
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
  
  export { checkForPolarity };
  