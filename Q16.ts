 console.log("great news we found a bigger table");

 let gusst_list:string[] = ["nazish","quratulain","nighat"];

 //unshift method
 gusst_list.unshift("sheryar");
 

 //splice
 gusst_list.splice(Math.floor(gusst_list.length/2),0, "arhama");
 

 //push
 gusst_list.push("ayan");
 console.log(gusst_list); 

 //for each
 gusst_list.forEach(gusst =>{
    console.log(`dear ${gusst}, you all are cordially invited to dinner`);
 }
    
 )


