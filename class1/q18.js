//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
var countries = ["Portugal", "London", "USA", "Canada"];
// //• Print your array in its original order.
for (var i = 0; i < countries.length; i++) {
    if (i == 0) {
        console.log("• Print your array in its original order.\n");
    }
    console.log(countries[i]);
}
console.log("\n\n");
// • Print your array in alphabetical order without modifying the actual list.
for (var i = 0; i < countries.length; i++) {
    countries.sort();
    if (i == 0) {
        console.log("• Print your array in alphabetical order without modifying the actual list. \n");
    }
    console.log(countries[i]);
}
console.log("\n\n");
// • Print your array in reverse alphabetical order without changing the order of the original list.
for (var i = 0; i < countries.length; i++) {
    var reverse_countries = countries.sort().reverse();
    if (i == 0) {
        console.log("• Print your array in reverse alphabetical order without changing the order of the original list.\n");
    }
    console.log(reverse_countries[i]);
}
