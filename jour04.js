// 01 - Object
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat);
console.log(cat.age);

if (cat.isCute == true) {
    console.log("So cute !");
}


// 02 - Combine

var cat2 = {
    name: "Mimi",
    age: 4,
    isCute: false,
}

var cats = [cat, cat2];
cats = Object.assign(cat, cat2);

console.log(cat.age);
console.log(cat2.isCute);


// 03 - Even
function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
checkIfEven(100)
checkIfEven(95)
checkIfEven(110)
checkIfEven(213)


// 04 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is bigger")
    } else if (num2 > num1) {
        console.log("num2 is bigger")
    } // else(num1 == num2); {
    //         console.log("both are the same")
    //     }
}
compare(15, 25);
compare(77, 76);
compare(18, 18);
compare(122, 25);
compare(12, 22);


// 05 - Add Up
function addUp(num) {
    somme = 0;
    for (var i = 0; i <= 12; i++) {
        somme = somme + i
    }
    console.log(somme)
}
addUp(12)