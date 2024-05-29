function show_magicians(magicians:string []){
magicians.forEach(name => console.log(name));
}
function make_great(magicians:string []) {
   return  magicians.map(name => `the great ${name}`)
}
///define an array of magician names
let magician_names = ["harry porter","sherry","naseer"]
let great_magicians = make_great(magician_names)
console.log(great_magicians)
