var guest = ['sania', 'maryum', 'hira'];
var notPresent = 'maryum';
var newGuest = 'muskan';
guest[1] = newGuest;
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + ' you are invited to dinner');
}
guest.unshift('aliza', 'bisma', 'waniya');
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + ' you are invited to dinner');
}
