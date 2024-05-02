//lowercase uppercase tittle casee
let personName: string="Sania"
console.log("lowercase:", personName.toLowerCase());

//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//titlecase
console.log("titlecase:", personName.replace(/\)bw/g,c => c.toUpperCase()));