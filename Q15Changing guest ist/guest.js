var guest = ['sania', 'fariha', 'shameen', 'zubair'];
console.log("invitation to dinnner");
for (var i = 0; i < guest.length; i++) {
    console.log("Hello    ".concat(guest[i], " ,Im inviting you on dinner tomorrow."));
}
var guestnotcome = guest[1];
console.log("".concat(guestnotcome, "  who cant make it to dinner."));
guest[1] = 'ahad';
console.log('updated invition to dinner');
for (var i = 0; i < guest.length; i++) {
    console.log("Hello     ".concat(guest[i], " ,Im inviting you on dinner tomorrow"));
}
