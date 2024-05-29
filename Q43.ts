function show_magicians(magicians:string []){
    magicians.forEach(name => console.log(name));
    }
    function make_great(magicians:string []) {
       return  magicians.map(name => `the great ${name}`)
    }
    ///define an array of magician names
    let magician_names = ["harry porter","sherry","naseer"]
    /////making a copy of original array through
    let copy_magician_name = magician_names.slice()
    /////modify the copied array to include the great with their names
let copy_great_magician =   make_great(copy_magician_name);
///show both arrays original and copied

/////original
show_magicians(magician_names)

////copied
show_magicians(copy_great_magician)

    