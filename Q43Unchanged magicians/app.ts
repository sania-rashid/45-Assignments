function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => console.log(magician));
  }
  
  function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      great_magicians.push("Great " + magicians[i]);
    }
    return great_magicians;
  }
  
  let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  
  let great_magicians: string[] = make_great([...magicians]);
  
  console.log("Original Magicians:");
  show_magicians(magicians);
  console.log("\nGreat Magicians:");
  show_magicians(great_magicians);
  