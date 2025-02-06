/*
Pseudocode:
Rule: One ship takes up 3 consecutive blocks on the row (locations)

- DECLARE: Three variables to hold the location of the ship. 
    - let location1
    - let location2
    - let location3

- DECLARE: A variable to hold the user's current guess.
    - let guess

- DECLARE: An int  variable to hold the number of hits.
    - let hits = 0

- DECLARE: An int variable to hold the number of guesses.
    - let guesses = 0

- DECLARE: A boolean variable to track whether the ship has been sunken. 
    - let isSunk = false

*/

let randomLoc = Math.floor(Math.random() * 5);
let location01 = randomLoc;
let location02 = location01 + 1;
let location03 = location02 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;





window.onload = function () { 
    setTimeout(game, 1500); // Wait 1.5 second before starting
};

function game () {
    while (isSunk == false) {
        guess = prompt("SARGEANT: Enemy Spotted, Defend Your Post\n\nReady, Aim...Fire! (Enter A Number From 0-6) :");

        if (guess < 0 || guess > 6){
            
            alert("SARGEANT: Please Aim For The Enemy Ship!\n(Enter A Valid Number)");

        } else {
            guesses += 1;

            if (guess == location01 || guess == location02 || guess == location03) {
        
                hits += 1;
                alert("HIT!");

                if (hits == 3){
                    isSunk = true;

                    alert("ENEMY: Ships Down! Retreat, Retreat!");
                } 
            } else {
                alert("MISS");
            }
        }
    }

    let stats = "SARGEANT: You Have Taken Down An Enemy Ship, Here Is Your Report:\nNumber of Guesses: " + guesses + "\nShooting Accuracy: " + (3/guesses*100) + "%";
    alert(stats);
};
