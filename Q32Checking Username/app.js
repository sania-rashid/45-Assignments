"use strict";
let current_users = ["saqib", "aziz", "waqar", "sarang", "siraj"];
let new_users = ["saba", "bisma", "ayat", "falak", "safiya"];
for (let i = 0; i < new_users.length; i++) {
    let new_username_lowercase = new_users[i].toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(new_username_lowercase)) {
        //console.log(`Sorry, the username '${new_users[i]}' is not available. Please enter a new username.`);
    }
    else {
        //console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}
