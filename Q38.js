"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
////calling the function
describe_city("karachi");
describe_city("pishawar");
describe_city("dehli", "india");
