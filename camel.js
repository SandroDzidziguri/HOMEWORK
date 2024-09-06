let userInput = input("Enter camelCase string here: ");
function snakeCase(text) {
     let result = ""
  for (let i of text) { 
        if (i == i.toUpperCase()) { 
                result += "_" + i.toLowerCase();    
                } else {       result += i;    
                 } 
                  }
  return result; } 
 console.log(snakeCase(userInput));