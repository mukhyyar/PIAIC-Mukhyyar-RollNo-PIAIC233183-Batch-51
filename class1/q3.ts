//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


var NameCase: string = "syed mukhyyar hussain rizvi";
console.log(NameCase.toUpperCase());
console.log(NameCase.toLowerCase());

//TITLE CASE
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

let titlecaseString: string = toTitleCase(NameCase);
console.log(titlecaseString); // Output: "Hello World"