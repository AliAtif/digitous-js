//01 - Array
var fruits = ["mango", "lemon", "blueberry"]
console.log(fruits);
console.table(fruits);

// 02 - Access
var ingredients = ["egges", "milk", "butter"]
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove
// a
var objects = ["pen", "book", "lamp"]
objects.unshift("chair");
console.log(objects);
// b 
objects.pop();
console.log(objects);
// c 
objects.push("laptop");
console.log(objects);
// d
objects.shift();
console.log(objects);

// 04 - Order
var numbers = [4, 10, 8, 12, 6]
numbers.reverse();
console.log(numbers);