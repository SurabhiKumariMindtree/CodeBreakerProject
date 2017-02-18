let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields() {
    answer = Math.floor((Math.random() * 100000) + 1);
    var str = answer.toString();
    while (str.length() < 4) {
        str = '0' + str;
    }
    attempt = 0;
}

function guess() {
    if (answer == '' || attempt == ' ')
        setHiddenFields();
}

function setMessage(answer) {
    messsage = document.getElementByName(answer).innerHTML;
}

function validateInput(answer) {
    if (answer.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}
if (validateInput(input.value) == true) {
    attempt = attempt + 1;
} else {
    return false;
}