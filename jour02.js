// 01 - Number
var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);
//=====================

// 02 - Convert
var basic = 34;
var stringified = basic;
console.log(stringified)
    //=======================

// 03 - Round
var num = 1.5;
var rounded = (Math.round(num));
console.log(rounded);
//==============================

// 04 - Arithmétique
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);
console.log(test ** bis);
//========================

// 05 - Comparaison
var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test = bis);
console.log(test == bis);
console.log(test === bis);
//========================

// 06 - Condition
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Ok good !")
} else {
    console.log("Oh nooo...");
}
//=============================

// var limit = 100;
// var score = 230;
// if (score >= limit) {
//     console.log("Ok good !")
// } else {
//     console.log("Oh nooo...");
// }

// var limit = 100;
// var score = 30;
// if (score >= limit) {
//     console.log("Ok good !")
// } else {
//     console.log("Oh nooo...");
// }
//=================================

// 07 - Condition II
var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
}
//=========================================

// 08 - Condition III
var limit = 50;
var score = 64;
var password = "azerty";

console.log(limit = 50);
console.log(limit == 50);
console.log(limit === 50);
console.log(limit > 50);
console.log(limit < 50);
console.log(limit >= 50);
console.log(limit <= 50);
//------------------------
console.log(score = 50);
console.log(score == 50);
console.log(score === 50);
console.log(score > 50);
console.log(score < 50);
console.log(score >= 50);
console.log(score <= 50);
//------------------------
console.log(password.length);

// var limit = 50;
// var score = 64;
// var password = "azert";

if (password.length > 5 && score >= limit) {
    console.log("Everything is good");
} //else if(password.length > 5 || score >= limit) {
//     console.log("Something is good")
// }else (password.length < 5 && score < limit){
//console.log("Nothing is good")
//}

//====================================================

// Bonus





//=============================================

// Bonus II
var month = "January";
switch (month) {

    case "Spring":
        console.log("Flowers over all !");
        break;
    case "Summer":
        console.log("Let us go  to the sea");
        break;
    default:
        console.log("That is not Winter");
        break;
}
//--------------------------------------------
var month = "Mars";
switch (month) {

    case "Winter":
        console.log("It will be so cold!");
        break;
    case "Summer":
        console.log("Let us go  to the sea");
        break;
    default:
        console.log("That is not Spring");
        break;
}
//==============================================

// Bonus III






//================================================

// Bonus IV