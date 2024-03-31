let Guest_List:string[] = ["Yahya","Ashan","Mohsin","Saad","Fahad"];

for(let i = 0; i<Guest_List.length; i++){

    console.log("Dear Mr. " +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!");
}

let Absent_Guest:string = "Fahad";

let new_Guest:string ="zaid";

Guest_List[0]= new_Guest;

for(let i = 0; i<Guest_List.length; i++){

    console.log("Dear Mr. " +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!");
}

console.log(`Mr. ${Absent_Guest} is not coming to the party`);