let spanElement1 = document.getElementById('firstNumber');
let spanElement2 = document.getElementById('secondNumber');

let checkButtonElement = document.getElementById('checkButton');
let restartButtonElement = document.getElementById('restartButton');

let userInput = document.getElementById('userInput');
let paragraphElement = document.getElementById('gameResult');

checkButtonElement.onclick = function() {
    let first_number = spanElement1.textContent;
    let second_number = spanElement2.textContent;
    let addition = parseInt(first_number) + parseInt(second_number);
    let userInputValue = userInput.value;
    userInputValue = parseInt(userInputValue);
    if (addition === userInputValue) {
        paragraphElement.textContent = "Congratulation! you got it!";
    } else {
        paragraphElement.textContent = "Please try again!";
    }
};

restartButtonElement.onclick = function() {
    let randomFirstNumber = Math.ceil(Math.random() * 100);
    let randomSecondNumber = Math.ceil(Math.random() * 100);

    paragraphElement.textContent = "";
    spanElement1.textContent = randomFirstNumber;
    spanElement2.textContent = randomSecondNumber;
    userInput.value = "";
};