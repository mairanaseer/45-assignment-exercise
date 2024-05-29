type car = {
    manufacturer:string
    model:string
    [key:string]:any;
}
function create_car(manufacturer:string, model:string, optional: Record<string, any>):car {
return{
    manufacturer,
    model,
    ...optional
}
}
const my_car: car = create_car("toyota","corrolla",{colour: "silver", year: "2004"})
console.log(my_car)