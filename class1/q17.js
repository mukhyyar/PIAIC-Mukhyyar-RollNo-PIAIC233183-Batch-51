//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var guestList = ["Asad", "Mushtaq", "Farrukh", "Hasnain"];
var unableToAttend = "Mushtaq"; // Assuming Mushtaq can't make it
var replacementGuest = "Zohaib"; // Inviting Zohaib instead
var dinnerInvitation = "Dear ";
// Check if the guest is unable to attend and replace with the new guest
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guestList[indexOfUnableToAttend] = replacementGuest;
}
// Print the updated invitation messages
for (var i = 0; i < 2; i++) {
    console.log("".concat(dinnerInvitation).concat(guestList[i], ",\nYou are cordially invited to dinner at my place. Let's have a great time together!\nSincerely, [Your Name]\n\n"));
}
console.log("This Guest is not able to attend the event:", unableToAttend);
