"use strict";
let magicians = ['Don', 'Rmeez', 'ainak wala'];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[1] = magicians[1] + "the great";
    }
}
make_great(magicians);
