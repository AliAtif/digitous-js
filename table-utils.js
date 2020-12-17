// 02 - Table

function multiply(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// 02 - Table

function addition(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} + ${i} = ${number + i}`);
    }
}

module.exports = {
    multiply,
    addition
}