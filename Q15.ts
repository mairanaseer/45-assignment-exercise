let gust_list:string[] = ["nazish","quratulain","moiz","nighat"];


//print the name who cant make dinner
let unableAttend:string = gust_list.splice(1,1)[0];

console.log(`${unableAttend} not invited for dinner`);

//push
gust_list.push("maira");

//print a message
gust_list.forEach(gust => {
    console.log(`dear ${gust} you are cordially invited to dinner`);
});

//pop

