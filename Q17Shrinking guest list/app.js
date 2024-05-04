var guest_list = ['Ameen Alam', 'Muhammad Osama', 'Bushra Khan'];
var not_present = 'muhammad Osama';
var new_guest = 'Daniyal';
guest_list[1] = new_guest;
guest_list.unshift('Ahad', 'Fozia', 'Usman');
console.log("\nunfortunately we can not arrange big table , only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner. "));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
