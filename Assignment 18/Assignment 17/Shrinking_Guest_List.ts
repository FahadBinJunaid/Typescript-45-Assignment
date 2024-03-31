"use strict";
let Guest_List = ["Yahya", "Ashan", "Mohsin", "Saad", "Fahad"];
/* for(let i = 0; i<Guest_List.length; i++){

    console.log("Dear Mr. " +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!");
}*/
let Absent_Guest = "Fahad";
let new_Guest = "zaid";
Guest_List[0] = new_Guest;

for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " + Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!");
}
console.log(`Mr. ${Absent_Guest} is not coming to the party\n`);
console.log("Good News! we found a big table so now we can invite 3 more guests.");
Guest_List.unshift("Ali");
Guest_List.splice(3, 0, "zaid");
Guest_List.push("faiz");

for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " + Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!");
}

console.log("\nsorry you are not invited because we can't arrange big table,but two peoples are still invited.\n");

while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop();
    console.log(`sorry Mr. ${remove_Guest} ,you are not invited for dinner.`);  
}

for(let i = 0; i<Guest_List.length; i++){

    console.log("\nDear Mr." +Guest_List[i] + ",\n\nyou are still invited in the party.\n\nThank You!\n");
}

Guest_List.splice(0,2);
console.log(Guest_List);