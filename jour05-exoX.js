// 01 - Calculator
// function calculate(par1, par2, par3){
//     if(par2!==0){
//         return 
//     }

// }


// 02 - Table
function multiply(num) {
    console.log(`Table de multiplication du ${num}`);
    for (let i = 1; i < 11; i = i + 1) {
        console.log(num + " x " + i + " = " + num * i);
    }
}
console.log(process.argv);
multiply(process.argv[2]);