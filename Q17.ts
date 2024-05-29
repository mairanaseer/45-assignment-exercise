console.log("unfortunatialy! the new dinner table table wont arrive so we can invite only 2 guest")
;let gueest_list:string [] = ['nazish','quratulain','moiz','nighat','habiba'];

while(gueest_list.length>2){
    let removed_guest = gueest_list.pop();
console.log (` sorry Dear ${removed_guest}, you are not invites for a dinner tomorrow`);
}

gueest_list.forEach(gueest_list =>{
    console.log(`dear ${gueest_list}, you all are still  for a dinner tomorrow`);
}
)
gueest_list.splice(0,2)
console.log(gueest_list)