var guests = ["Ameen Alam", "Muhammad Osama", "Bushra Khan"];
console.log("invitation to dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear".concat(guests[i], ", would be honored to have you join me for dinner."));
}
var guestWhoCanMakeIt = guests[1];
console.log("".concat(guestWhoCanMakeIt, " cant make it to dinner."));
guests[1] = "Daniyal";
console.log("updated invitation to dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would be honored to have you join me for dinner."));
}
