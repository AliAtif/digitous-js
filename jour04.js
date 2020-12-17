// 01 - Object
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);

if (cat.isCute) {
    console.log("So cute !");

}

//======================================

// 02 - Combine

var cat2 = {
    name: "Mimi",
    age: 4,
    isCute: false,
};
console.log(cat2);
var cats = [cat, cat2];
cats = Object.assign(cat, cat2);

console.log(cat.age, cats[0].age);
console.log(cat2.isCute, cats[1].isCute);

//==========================================

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

//=========================================

// 04 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`);
    } else {
        console.log("Both are the same");
    }
}

compare(12, 10);
compare(1, 10);
compare(10, 10);

//============================================

// 05 - Add Up
function addUp(num) {
    var somme = 0;
    for (var i = 1; i <= num; i++) {
        somme += i
    }
    return somme;

}
var result = addUp(12);
console.log(result);
addUp(12);

//============================================

// 06 - Time
function format(num) {
    var heures = Math.floor(num / 3600);
    var minutes = Math.floor((num - 3600) / 60);
    var secondes = Math.floor((num - 3600) - 60);
    // console.log(heures)
    // console.log(minutes)
    // console.log(secondes)

    console.log(`${heures} : ${minutes} : ${secondes}`)

}
format(3700)


// 06 - Time 2
function format(num) {
    // 124 secondes => 2m et 4s
    // je sais que 1m = 60s
    /*
    console.log(Math.floor(num / 3600)); // heures
    console.log(num % 3600) // minutes et les secondes
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 60);
    */

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}

//=====================================================

//06 - Time 3
function formatWithoutMaths(num) {
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    for (var i = 0; i < num; i++) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 24) {
            days++;
            hours = 0;
        }
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

//==============================================================

//06 - Time 4
function adamaFormat(num) {
    var hours = Math.floor(num / 3600);
    var rest = num - hours * 3600;
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700);
formatWithoutMaths(3700);
adamaFormat(3700);

//=================================================================

// Bonus 1 - Generate password
function generatePassword(num) {
    var max = 122;
    var min = 48;
    var password = "";
    for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        while (randomIndex >= 58 && randomIndex <= 64) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        }
        var letter = String.fromCharCode(randomIndex);
        password += letter;
    }

    console.log(password);
}
generatePassword(10);

//=======================================================================

// Bonus 2 - Jeu de dé
function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;
    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);
        sum += dice;
    }
    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);
if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}