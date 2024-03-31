
// //Tests for equality and inequality with strings:

console.log("Equality test with strings:","Banana" === "Banana"); 

// //Tests for inequality with strings:
 console.log("Inequality with strings:", ("Banana" as string) != "orange");

// //Tests using the lower case function:
 console.log("using the lower case function:", "HOW ARE YOU".toLowerCase() === "how are you");

// //Numerical tests involving equality and inequality: greater than and less than, greater than or equal to, and less than or equal to

// //Numerical tests involving equality:
 console.log("Numerical tests involving equality:", 38 === 38);

// //tests involving inequality:
 console.log("tests involving inequality:", (50 as number)!= 30);

// // greater than:
 console.log("greater than:", 60 > 50);

// //less than:
 console.log("less than:", 15 < 20); 

// // greater than or equal to :
 console.log("greater than or equal to :", 70 >= 55);

// //less than or equal to:
 console.log("less than or equal to:", 17 <= 21);

// // Tests using "and" and "or" operators:

// //Tests using "and" operators:
 console.log("Tests using and operators:", 80 === 80 && 200 > 181);

// //Tests using "or" operators:
  console.log("Tests using or operators:", (18 as number) != 15 || false);

// //Test whether an item is in a array:
 const countrysName :string[] =["pakistan","USA","china"];
 console.log("Test monday an item is in a array:",countrysName.includes("pakistan"));
// Test whether an item is not in a array:
 console.log("Test saturday an item is not in a array:",!countrysName.includes("Turkey"));


//now false tests:
console.log("\nnow false tests:\n");

//Tests for equality and inequality with strings:

console.log("Equality test with strings:",("Blue"as string) === "Red"); 

//Tests for inequality with strings:
console.log("Inequality with strings:", ("Yellow" as string) != "Yellow");

//Tests using the lower case function:
console.log("using the lower case function:", "HOW ARE YOU".toLowerCase() === "HOW ARE YOU");

//Numerical tests involving equality and inequality: greater than and less than, greater than or equal to, and less than or equal to

//Numerical tests involving equality:
console.log("Numerical tests involving equality:", (85 as number )=== 20);

//tests involving inequality:
console.log("tests involving inequality:", (250 as number)!= 250);

// greater than:
console.log("greater than:", 45 > 55);

//less than:
console.log("less than:", 75 < 20); 

// greater than or equal to :
console.log("greater than or equal to :", 50 >= 150);

//less than or equal to:
console.log("less than or equal to:", 220 <= 61);

// Tests using "and" and "or" operators:

//Tests using "and" operators:
console.log("Tests using and operators:", (90 as number) === 50 && 100 > 258);

//Tests using "or" operators:
console.log("Tests using or operators:", (44 as number) != 44 || false);

// //Test whether an item is in a array:
const countryNames :string[] =["pakistan","USA","china"];
console.log("Test monday an item is in a array:",!countryNames.includes("pakistan"));

// Test whether an item is not in a array:
console.log("Test saturday an item is not in a array:", countryNames.includes("Turkey"));
