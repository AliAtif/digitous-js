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
numbers.sort((a, b) => a - b);
console.log(numbers)

// 05 - Boucle
var total = 0;
var limit = 10;
for (var i = 0; i <= limit; i++) {
    console.log(i);
    total = total + i;

    // total = i + " + " + total;

}

console.log(total);


// 06 - Reverse
var string = "Hello Konexio !";
var splitted = string.split("");
var reversed = [];
for (i = 0; i <= splitted.length; i++) {
    reversed.unshift(splitted[i]);
}
var result = reversed.join("");
console.log(result);


// Bonus
for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 7 === 0) {
        console.log()
    } else {
        console.log(i);
    }
}


// Bonus ||
total = 0;
limit = 10;
i = 0;
while (i <= limit) {
    total = total + i;
    i++;
}
console.log(total);


// Bonus III

var promo = ["a", "b", "c", "d"];
var min = 0;
var max = promo.length - 1;
var random = Math.floor(Math.random() * (max - min + 1));
console.log(promo[random]);


// Bonus IV

var arr = [];
var min = 0;
var max = 100;
for (i = 0; i < 20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1));
    arr.push(random);
}

var arrayMax = arr[0];
for (i = 1; i < 20; i++) {
    if (arr[i] > arrayMax) {
        arrayMax = arr[i];
    }
}
console.log(arrayMax);




// ex 

var max = 6;
var min = 1;
result = 0;

for (var i = 0; i < 10; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    result = result + dice;
    // console.log(dice);
}
console.log(result)


// Exercice 1: afficher la somme de tout les entier allant de 25 à 75
// Exercice 2: afficher la multiplication de tout les entier allant de 10 à 15
// Exercice 3: afficher la somme des entiers pairs allant de 0 à 100
// Exercice 4: afficher tout les multiples de 7 entre 0 et 1000


// exercice 1
somme = 0;
for (var i = 25; i <= 75; i++) {
    // console.log(i)
    somme = somme + i
}
console.log(somme)

// exercice 2
multiplication = 1;
for (var i = 10; i <= 15; i++) {
    // console.log(i)
    multiplication = multiplication * i;
}
console.log(multiplication)


// exercice 3
somme = 0;
for (var i = 0; i <= 100; i += 2) {
    console.log(i)
    somme = somme + i
}
console.log(somme)


// exercice 4
for (var i = 0; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i)
    }
}



// exercice 1-1
var i = 25
somme = 0;
while (i <= 75) {
    // console.log(i)
    somme = somme + i;
    i++;
}
console.log(somme);