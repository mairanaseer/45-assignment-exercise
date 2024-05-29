let user_names =  ["sherry","arhama","muntaha","irha","admin"]
user_names = []
if(user_names.length === 0){
console.log("your array is empty you need to find some users!")
}else{
user_names .forEach(oneuser =>{
    if (oneuser === "admin"){
console.log(`hello ${oneuser},would you like to see a status report`)
    }else{
        console.log(`hello ${oneuser}, thankuh for logging in again`)
    }
})
}