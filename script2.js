// 1 //
console.log ("hello " + (prompt("whats your name")))

// 2 //

var string = prompt( "enter your word");
var charCount = string.length;
console.log(" your string has " + charCount + " letters")

// 3 //

var quote =(prompt( "whats your quote"))
var author = (prompt("who said it"))
console.log(  author + " said that " + quote)

// 4 //

var word = prompt( " say it ");
var lowercase = word.toLowerCase();
console.log( lowercase )

// 5 //

var sentence = prompt( "enter something");
var formattedSentence = sentence.replace(/\s+/g, "...")
console.log (sentence)
console.log(formattedSentence)

// 6 //

function convert(str) {
    return str.replace(/:\)/g, '🙂').replace(/:\(/g, '🙁');
}

function main() {
    var inputString = prompt("Please enter a sentence:");

    if (inputString !== null && inputString !== "") {
        var convertedString = convert(inputString);

        console.log('Original: "' + inputString + '"');
        console.log('Converted: "' + convertedString + '"');
    } else {
        console.log("No input provided.");
    }
}
main()

// 7 // 

