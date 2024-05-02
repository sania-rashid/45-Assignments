let guests = ["Ameen Alam","Muhammad Osama","Bushra Khan"];
console.log("invitation to dinner:");
for(let i =0;i<guests.length;i++){
    console.log(`Dear${guests[i]}, would be honored to have you join me for dinner.`);
}
const guestWhoCanMakeIt = guests[1];
console.log(`${guestWhoCanMakeIt} cant make it to dinner.`);
guests[1]="Daniyal";
console.log("updated invitation to dinner:");
for(let i=0;i<guests.length;i++){
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}