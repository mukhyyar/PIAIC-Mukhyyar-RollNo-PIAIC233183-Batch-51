//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends_names = ["Asad", "Mushtaq", "Farrukh", "Hasnain"];
var message = "Hello,";
// Print each person's name
console.log(message, friends_names[0]);
console.log(message, friends_names[1]);
console.log(message, friends_names[2]);
console.log(message, friends_names[3]);
console.log('==========================Following is for the loop=================================== ');
for (var i = 0; i < friends_names.length; i++) {
    console.log(message, friends_names[i]);
}
