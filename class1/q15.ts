//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.




var guestList = ["Asad", "Mushtaq", "Farrukh", "Hasnain"];
var unableToAttend  = "Mushtaq"; // Assuming Mushtaq can't make it
var replacementGuest = "Zohaib"; // Inviting Zohaib instead
var dinnerInvitation = "Dear ";

// Check if the guest is unable to attend and replace with the new guest
var indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guestList[indexOfUnableToAttend] = replacementGuest;
}

// Print the updated invitation messages
for (var i = 0; i < guestList.length; i++) {
    console.log(`${dinnerInvitation}${guestList[i]},\nYou are cordially invited to dinner at my place. Let's have a great time together!\nSincerely, [Your Name]`);
}
