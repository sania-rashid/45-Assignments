"use strict";
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!");
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss");
make_sandwich("Peanut Butter", "Jelly");
