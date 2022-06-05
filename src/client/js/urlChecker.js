
//https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
//https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/


/*function checkForURL(formURL){
  let regex = formURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
   if (regex) {
    return true;
  } else {
    return false;
  }
}

export { checkForURL } */


function checkForURL(string) {
  var regex = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

   if(regex == null){
       return 0;
   } else{
   return 1;
   }
}

export { checkForURL }