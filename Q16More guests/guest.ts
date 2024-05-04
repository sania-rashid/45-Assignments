let guest=['sania','maryum','hira'];
let notPresent='maryum';
let newGuest='muskan';
guest[1]=newGuest;
for(let i=0; i<guest.length; i++){
    console.log(guest[i]+' you are invited to dinner')
}
guest.unshift('aliza','bisma','waniya')
for(let i=0; i<guest.length; i++){
    console.log(guest[i]+' you are invited to dinner')
}