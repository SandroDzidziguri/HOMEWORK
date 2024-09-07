let text = input("Enter text:");
function validateText(text) { 
      text = text.toLowerCase();
    if (text.length < 2 || text.length > 6) { 
              console.log("Invalid:");         return;     }
    let letters = text.match(/^[a-zA-Z]+/);       let numbers = text.match(/\d+$/);        
    if (!letters || !numbers) {         console.log("Invalid: ");
             return;     }
    if (letters[0].length < 2) {
               console.log("Invalid: The text must start with at least 2 letters.");         return;     }
    if (numbers[0][0] === '0') {   
            console.log("Invalid: The first number cannot be 0.");         return;     }
    if (/[^a-zA-Z0-9]/.test(text)) { 
              console.log("Invalid: The text must not contain punctuation, spaces, or special characters.");         return;     }
    console.log("Valid"); }
validateText(text);