let guest_list : string[]=['Ameen Alam','Muhammad Osama','Bushra Khan'];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected Sir/Madam`  + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
// }
let not_present : string ='Muhammad Osama';
let new_guest : string ='Daniyal';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'  + guest_list[i] + '.\nwe invited you on dinner tomorrow.\n\n');
}
guest_list.unshift('Ahad','Fozia','Usman');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'  + guest_list[i] + '.\nwe invited you on dinner tomorrow.we found a bigger dinner table so we decided to invite 3 more guests.\n\nThank You');
}