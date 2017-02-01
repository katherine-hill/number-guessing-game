//Generate num between 1-100
//if higher or lower, tell user
//if repeating entries, alert them to dumbness
//after 5 guesses, game over
//if correct then tell user theyre right
const addButton = document.querySelector('.addbutton');
const addForm = document.querySelector('.addform');
const randomNumber = Math.floor((Math.random() * 100) + 1);
let duplicateGuess = false;
let isWrong = false;
let gameOver = false;
let entryNums = [];

function checkGuess() {

    let lastNumber = Number(entryNums[entryNums.length - 1]);
    if (duplicateGuess) {
        alert('you dumb');
        duplicateGuess = false;
    } else {
        if (lastNumber < randomNumber) {
            alert("too low");
            isWrong = true;
        } else if (lastNumber > randomNumber) {
            alert("too high");
            isWrong = true;
        } else if (lastNumber === randomNumber) {
            alert("wow!");
            isWrong = false;
        }
    }

    console.log(lastNumber);
    console.log(randomNumber);
    // if ()
}

function checkEntries() {

    if (entryNums.length > 4) {
        gameOver = true;

    }

}
addForm.addEventListener('submit', () => {
    // addForm.addEventListener('submit', function
    event.preventDefault();
    // formData.get(entryNums);
    // entryNums.push(i);
    const enteredNumber = Number(event.target[0].value);
    for (var index = 0; index < entryNums.length; index++) {
        if (enteredNumber === entryNums[index]) {
            duplicateGuess = true;
        }
    }
    entryNums.push(enteredNumber);
    document.querySelector('.entrynum').innerHTML = `${entryNums.length}`;
    checkGuess();
    checkEntries();
    if (gameOver && !isWrong) {
        alert("you win, game over punk");
        location.reload();
    } else if (gameOver && isWrong) {
        alert("you lose, game over punk");
        location.reload();
    }
    console.log(entryNums);
    // console.dir(enteredNumbers);


    // const allInputs = event.target;

    //have to push guess into array at some point
});
