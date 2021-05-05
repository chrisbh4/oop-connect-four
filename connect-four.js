//CF : UI
/*
1.Column is full :

 add  the class full to the class tag click-target
  when the column is filled with user tiles
Probably going to need to add an if statment in the JS file
that checks if the column is full then setAttribuite( 'class', 'full')

2. Indicating shose turn it is :

if it is player ones turn then have the click target change colors to "black"
when you hover over it
    if its player two turn then have the color turn to "red"
can specify this by adding thhe "black"/"red" class to the DIV's ID= "click-targets"


3. Putting a token in a square

select the sqaure that you want to place it in , create a div with a class of
    both "token" and the color that you want the token to be "black" or "red"
    then make the div the child of the elemnt of that targeted sqaure
        : append <div class="token black"></div> to the targeted sqaure


*/

window.addEventListener("DOMContentLoaded", () =>{

import {Game} from "./game.js"

const game = undefined
const player1 = document.getElementById("player-1-name").value;
const player2 = document.getElementById("player-2-name").value;

const enableGame = function(event){
    if (player1 && player2){
    document.getElementById("new-game").removeAttribute("disabled");

    }

}
document.getElementsById("player-1-name").addEventListener("keyup", enableGame)

document.getElementsById("player-2-name").addEventListener("keyup", enableGame)

document.getElementById("new-game").addEventListener("click", event =>{

})






})
