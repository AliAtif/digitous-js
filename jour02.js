// 01 - Number
var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);
//=====================

// 02-a - Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified)
    //---------------------------------
    // 02-b - Convert
var basic = 32;
console.log("Number: (en jaune)", basic);
console.log(basic.length);

var stringified = basic.toString();
console.log("String: (en blanc)", stringified);
console.log(stringified.length);

// Numéro de télephone
var number = 0123456789;
var stringiefiedNumber = number.toString();
if (stringiefiedNumber.length === 10 && stringiefiedNumber.charAt(0)) {
    console.log("C'est un bon numéro de téléphone");
} else {
    console.log("Mauvais numéro");
}


// Conversion en string
var number1 = 1.63283946;
console.log("Conversion de nombre en string: ", number1.toFixed(2));
var number2 = 23;
console.log(number1 + number2);
console.log(number1.toString() + number2.toString());
//========================================================================


// 03 - Round
var num = 1.5;
var rounded = Math.round(num);
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
console.log(test >= bis);
console.log(test <= bis);
console.log(test = bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

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


// 07 - Condition II
var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
}
//=========================================

// 08 - Condition III
console.log("Resultat de la premiere condition:", score >= limit);
console.log("Resultat de la deuxieme condition:", password.length > 5);

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Somehting is good");
} else {
    console.log("Nothing is good");
}

//====================================================

// Bonus
var max = 60;
var min = 20;
var random = Math.floor(Math.random() * (max - min + 1) + min); // number between min and max
console.log(random);

if (random === 6) {
    console.log("I win");
} else {
    console.log("Try again");
}

// explication de random

var random = Math.random();
var min = 50;
var max = 100;
console.log("Nombre entre 0 et 1:", random);
console.log("Nombre entre 0 et 51", random * (max - min + 1));
console.log("Nombre entre 50 et 101", random * (max - min + 1) + min);
console.log("Integer entre 50 et 100", Math.floor(random * (max - min + 1) + min));
//=============================================


// Bonus II
var month = "August";

if (month === "January") {
    console.log("Winter");
} else if (month === "February") {
    console.log("Winter");
} // 12 mois


switch (month) {
    case "Januray":
    case "February":
    case "March":
        {
            console.log("Winter");
            break;
        }
    case "April":
    case "May":
    case "June":
        {
            console.log("Spring");
            break;
        }
    case "July":
    case "August":
    case "September":
        {
            console.log("Summer");
            break;
        }
    case "October":
    case "November":
    case "December":
        {
            console.log("Fall");
            break;
        }
}

//==============================================

// Bonus III

var number = 3.3;
var decimalValue = number - Math.floor(number);
var result = null;
if (decimalValue >= 0.5) {
    result = Math.ceil(number);
} else {
    result = Math.floor(number);
}

console.log(result, Math.round(number));

//================================================

// Bonus IV