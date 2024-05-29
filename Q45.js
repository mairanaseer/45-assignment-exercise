"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const my_car = create_car("toyota", "corrolla", { colour: "silver", year: "2004" });
console.log(my_car);
