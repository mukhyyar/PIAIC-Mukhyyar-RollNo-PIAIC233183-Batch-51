//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

var countries = ["Portugal", "London", "USA", "Canada"];


var guestList = ["Asad", "Mushtaq", "Farrukh", "Hasnain"];

var dinnerInvitation = "Dear ";

// Print personalized invitation messages
for (var i = 0; i < guestList.length; i++) {
    var number_ppl = 1;
    console.log(`${number_ppl+i},\t ${dinnerInvitation}${guestList[i]},\nYou are cordially invited to dinner at my place. Let's have a great time together!\nSincerely, [Syed Mukhyyar]\n\n`);
}