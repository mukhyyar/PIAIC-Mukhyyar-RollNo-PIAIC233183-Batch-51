//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var NameCase = "syed mukhyyar hussain rizvi";
console.log(NameCase.toUpperCase());
console.log(NameCase.toLowerCase());
//TITLE CASE
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
}
var titlecaseString = toTitleCase(NameCase);
console.log(titlecaseString); // Output: "Hello World"
