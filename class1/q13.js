//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var vehicle_maker = ["Honda", "BMW",];
// Print each person's name
console.log("I would like to buy ", vehicle_maker[0], "car");
console.log("I would like to buy a sports ", vehicle_maker[1], "bike");
console.log('==========================Following is for the loop=================================== ');
for (var i = 0; i < vehicle_maker.length; i++) {
    console.log("I would like to buy", vehicle_maker[i], "car");
}
