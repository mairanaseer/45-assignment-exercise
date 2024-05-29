function make_sandwiches(...items:string[]){
console.log("\n making a sandwich with the following items:\n")
items.forEach(singleitem => console.log(singleitem));
console.log("\nnow enjoy sandwich\n")
}
////call the function three times with different numbers of argument
make_sandwiches("chicken","cheese","tomato","egg","mayo")
make_sandwiches("bihari boti","cheese","ketchup","butter")
make_sandwiches("boiled egg","capsicum")