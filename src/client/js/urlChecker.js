
//https://www.codegrepper.com/code-examples/javascript/javascript+validate+url

function checkForURL(string) {
  let regex = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return regex !== null;
}
console.log("::: URL validated :::");

export { checkForURL };

