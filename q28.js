"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person_age = 20;
if (person_age < 2) {
    console.log("that person is a baby");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("that person is a toddiler");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("that person is a kid");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("that the person is a teenager");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("that the person is an adult");
}
else if (person_age >= 65) {
    console.log("that the person is an elder");
}