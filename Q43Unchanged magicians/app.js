"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("Great " + magicians[i]);
    }
    return great_magicians;
}
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
let great_magicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
