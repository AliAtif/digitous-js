// 02 - Table

function multiply(num) {
    console.log(`Table de multiplication du ${num}`);
    for (var i = 1; i < 11; i = i + 1) {
        console.log(num + " x " + i + " = " + num * i);
    }

}
console.log(process.argv);
multiply(process.argv[2]);

// 02 - Table

function addition(num) {
    console.log(`Table de addition du ${num}`);
    for (var i = 1; i < 11; i = i + 1) {
        // console.log(num + i)
        // result = num + i
        // return result
        console.log(num + i);

    }
    // console.log(result);
}
console.log(process.argv);
addition(process.argv[2]);
// addition(7);

module.exports = {
    multiply,
    addition
};