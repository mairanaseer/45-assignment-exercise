let current_users = ["annie","moiz","nazish","maira","sherry"]
let new_users = ["alina","fatima","SHERRY","ANNIE","abiha"]
////loop through newuser to check username availability
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
if(our_condition){
    console.log(`sorry ${new_one_user} is already exist`)
}else{
    console.log(`this username ${new_one_user} is available`)
}
})