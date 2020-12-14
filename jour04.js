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