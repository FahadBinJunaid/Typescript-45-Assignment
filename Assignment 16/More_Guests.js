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
