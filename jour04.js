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
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
var cat2 = {
    name: "Mimi",
    age: 4,
    isCute: false,
}

var cats = [cat, cat2];
cats = Object.assign(cat, cat2);

console.log(cat.age);
console.log(cat2.isCute);