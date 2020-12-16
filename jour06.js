// 01 - Format
function formatDate(num, num1, num2) {
    var format = new Date();
    var result = format.toDateString(num, num1, num2);

    console.log(result);
}
formatDate()


// 02 - Age
// function calculateAge(a, b, c) {
//     var birthday = parseInt(a, b, c);
//     var today = new Date();
//     var birthday = new Date();
//     var age = today - birthday;
// }
// result = calculateAge();
// console.log(result);


// 03 - Validator