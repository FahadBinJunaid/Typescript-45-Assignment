let Guest_List = ["Yahya", "Ashan", "Mohsin", "Saad", "Fahad"];

/* for(let i = 0; i<Guest_List.length; i++){

     console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
 }*/


 let Absent_Guest:string = "Fahad";

 let new_Guest:string ="zaid";

Guest_List[0] = new_Guest;

/*for(let i = 0; i<Guest_List.length; i++){

    console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}*/

// console.log(`${absent_Guest} is not coming to our party.\n`);

// console.log("Good news! we have found a big table so now we can invite 3 more guests.");

// yahan per me 3 guest add kiye hain.

Guest_List.unshift("Ali");
Guest_List.splice(3,0,"zaid")
Guest_List.push("faiz")

//yahan per me 6 guest ke array ko print kraya he.
// for(let i = 0; i<Guest_List.length; i++){

//     console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
//}

// sorry message for not inviting.
// console.log("\nsorry you are not invited because we can't arrange big table,but two peoples are still invited.\n");

//yahan per mene guest remove kiye hain.
while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop();
    //console.log(`sorry Mr. ${remove_Guest} ,you are not invited for dinner.`);  
}
// hamare bache howe 2  invited guests. 

// for(let i = 0; i<Guest_List.length; i++){

//     console.log("\nDear Mr." +Guest_List[i] + ",\n\nyou are still invited in the party.\n\nThank You!\n");
// }

// mene sare guest array se remove kar diye hain.
Guest_List.splice(0,2);
console.log(Guest_List);

// Exercise 19.

// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are:${Guest_List.length}`);