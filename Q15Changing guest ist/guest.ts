let guest=['sania','fariha','shameen','zubair'];
console.log("invitation to dinnner")
for(let i=0; i<guest.length; i++){
    console.log(`Hello    ${guest[i]} ,Im inviting you on dinner tomorrow.`)
}
const guestnotcome=guest[1];
console.log(`${guestnotcome}  who cant make it to dinner.`)
guest[1]='ahad'
console.log('updated invition to dinner')
for(let i=0; i<guest.length; i++){
    console.log(`Hello     ${guest[i]} ,Im inviting you on dinner tomorrow`)
}