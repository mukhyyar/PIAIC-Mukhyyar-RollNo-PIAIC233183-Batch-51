//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Asad", "Mushtaq", "Farrukh", "Hasnain"];
var dinnerInvitation = "Dear ";
// Print personalized invitation messages
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(dinnerInvitation).concat(guestList[i], ",\nYou are cordially invited to dinner at my place. Let's have a great time together!\nSincerely, [Syed Mukhyyar]"));
}
