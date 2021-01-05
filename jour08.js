// 01 - File System

var fs = require("fs");

//  façon 1
fs.readFile("./jour08.txt", function (err, data) {
    if (err) {
       console.log("We did not found the file");
       return;
    }
 
    console.log("Le contenu  : " + data.toString());
 });

 //--------------------------------------------------------------------------

 // façon 2 
 function read(err, data){
    if (err) {
        console.log("We did not found the file");
        return;
     }
  
     console.log("Le contenu de fichier est : " + data.toString());
 }
 fs.readFile("./jour08.txt", read);

 //==========================================================================

 // 02 - Map Double

// façon 1

var array = [1, 2, 3, 4, 5];

var doubles = array.map(function(num) {
  return num * 2;
});

console.log(doubles);

//----------------------------------------------------------

// façon 2 

// var array =[1, 2, 3, 4, 5];
// var double = function (array) {
//     return array.map(function(element)  {
//       return element * 2;
//     });
//   } 
//   console.log(double(array))

  //=================================================================

  // 03 - Map Names

  var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
] 

console.log("Type de longnames:", typeof longNames[0].firstName);
console.log(longNames[0].lastName);

var shortNames = longNames.map(function(element) {
   return {
       name: `${element.firstName} ${element.lastName}`
   };
});

//===============================================================

// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8];

var array = [1, "toto", 34, "javascript", 8, -5];
var numbers = array.filter(function(element) {
    //return typeof element === "number";
    //return element > 0;
    //return isNaN(element) === false;
    return parseInt(element) === element;
})

//==============================================================

//  05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(function(num){
	return num % 2 === 0 ;
});
console.log(even)

//==============================================================

// 06 - Cakes

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolatesCake = cakes.filter(function(element) {
   return element.flavor === "chocolate";
}).map(function(element) {
   element.status = "Sold out !";
   return element;
});

console.log(chocolatesCake);