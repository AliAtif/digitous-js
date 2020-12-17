// ## 01 - Alphabet

function sortLetters(str) {
    console.log(str);
    var letters = str.split("");
    console.log(letters);
    console.log(letters.sort());
    console.log(letters.sort().join(""));

}
sortLetters("konexio");

// 01 - Alphapet-2 solution
// function sortLettersSebastien(word) {
//     var letters = [];
//     for (var i = 0; i < word.length; i++) {
//         letters.push(word[i]);
//     }
//     console.log(letters.sort().join(""));
// }

// sortLetters("konnexio");



// 02 - XOXO
function countEach(word) {

    var words = word.split("");
    console.log(words);

    var jointed = words.join(" ");
    console.log(jointed);

    var x = "";
    var o = "";

}
console.log(countEach("xxxoooox"));


// 03 - Palindrome
function checkPal(st) {
    sts = st.split("");
    console.log(sts);

    reversed = sts.reverse();
    console.log(reversed);

    if (sts == reversed) {
        console.log("Palindrome !")
    } else {
        console.log("Nope")
    }

}
checkPal("lit")