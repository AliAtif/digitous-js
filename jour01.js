// 01 - Hello World
console.log("Hello World !");

// 02 - String
var test = "My name is Atif";
console.log("My name is Atif");

// 03 - Concatenation
var name = "Atif";
console.log("Nice to meet you " + name);

// 04 - String Length
var testLength = "I'm very long !";
console.log(`${testLength} ${testLength.length}`);
var testLength = "I'm very long !";
console.log(testLength.length)

// 05 - Replace
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));

// 06 - Up and Down
var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);

// ## 07 - Split
var word = "banana";
var letters = word.split("");
console.log(letters);

// 08 - Template
var age = 80;
var template = `I'm  ${age} years old`;
console.log(template);