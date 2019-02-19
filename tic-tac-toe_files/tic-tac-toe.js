var gameSpaces = document.querySelectorAll("td");

var current_player =1;

function clickedSquare(e) {
    console.log("clicked Square");

    if (current_player === 1 && e.target.innerHTML === "") {
        e.target.innerHTML = "X";
        current_player = 2;
    } else if (e.target.innerHTML === "") {
        e.target.innerHTML = "O";
        current_player = 1;
    }

//    selector to get mouse to hover

// Check for winner
    checkforWinner();
}
// Add a click event listener for each game space

for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}

// Function to check for winner

 function checkforWinner()
{
    // using an array to determine whether X or O won the game.
    console.log('Checking for winner');
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X"))
    {
        alert("X wins");
        return false;
    }
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins");
        return false;
    }
}


//fucntion to check rather if cat won the game vs X or O

function CAT() {
    let checkCat = true;
    for (i = 0; i < gameSpaces.length; i++) {
        if (gameSpaces[i].innerHTML === "") {
            checkCat = false;

        }
    }

        if (checkCat === true)
    {
        alert("You both lost! It's a cat game.")
    }
}

// reset button as a loop that when press will start the game board over

let button = document.querySelector("button");

button.onclick = function(b) {
    for (let i = 0; i < gameSpaces.length; i++) {
        gameSpaces[i].innerHTML = "";
    }
};















