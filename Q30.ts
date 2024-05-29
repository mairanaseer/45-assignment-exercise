 let user_name = ["sherry","arhama","muntaha","irha","admin"]
 ///using for each loop on array
 user_name.forEach(oneuser =>{
    if (oneuser === "admin"){
console.log(`hello ${oneuser},would you like to see a status report`)
    }else{
        console.log(`hello ${oneuser}, thankuh for logging in again`)
    }
 })