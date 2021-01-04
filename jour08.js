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

 var array =[1, 2, 3, 4, 5];
 var double;

 function doubleArray(array) {
    return array.map(function(element)  {
      return element * 2;
    });
  } result = doubleArray(array);
  console.log(result)