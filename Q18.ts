let fav_place:string[] = ['kalam','muree','naran','islamabad','gilgit','kagan']
//print in original order
console.log("original order:", fav_place)

//print array in alphebatical order without modifying the actual list.
console.log("Alphabatical order", fav_place.slice().sort());

//array is still in its original order by printing it.
console.log("original order:", fav_place)

//print array in reverse alphebatical order without changing the order of the original list
console.log ("reverse order:", fav_place.slice().sort().reverse());

// array is still in its original by printting it again
console.log("original order:", fav_place);

//reverse the order of list print array to show that its orderhas changed
console.log("reverse order changed")
fav_place.reverse();
console.log(fav_place)

//reverse the order of list again.print the list to show its back to its original order
console.log("original order:", fav_place.sort());
console.log(fav_place);

//sort to change array so its stored in reverse alphabatical order.print the list to show that its order has changed
console.log("reverse alphabatical order changed:", fav_place.sort().reverse());
console.log(fav_place)
