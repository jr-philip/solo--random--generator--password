const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let charactersLetters = characters.join("")// join is a way for making all the items in the array to be together and not spaced
console.log(charactersLetters)

let password1Character = document.getElementById("password-1")
let passowrd2Character = document.getElementById("password-2")

function randomString(len) {
    // let charSet =   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * charactersLetters.length);
        console.log(randomPoz)
        console.log(randomString)
        let randomZop = charactersLetters.substring(randomPoz, randomPoz + 1);
        console.log(randomZop)
        randomString += randomZop
        console.log(randomString)

    }
    return randomString;
}
console.log(randomString(15))

function generateRandom() {
    let pswd1 = randomString(15)

    password1Character.textContent = pswd1;
}


function newRandom() {
    let pswd2People = randomString(15)
    passowrd2Character.textContent = pswd2People;
}

