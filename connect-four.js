import Game from "./game.js"

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
//function updateUI()



let game = undefined

function updateUI(){
    if(!game){
    document.getElementById('board-holder').setAttribute('class ', 'is-invisible')
    }
    else {
        document.getElementById('board-holder').removeAttribute('class', 'is-invisible')
        let name = game.getName()
        document.getElementById('game-name').innerHTML =  name
    }
}

window.addEventListener("DOMContentLoaded", () =>{


// let game = new Game()


function enableGame (){
    const player1 = document.getElementById("player-1-name").value;
    const player2 = document.getElementById("player-2-name").value;
    const isValidForm = player1.length > 0 && player2.length > 0;


   document.getElementById("new-game").disabled = !isValidForm
//document.getElementById("new-game").setAttribute('disabled', false)

}

document.getElementById("player-1-name").addEventListener("keyup",() =>{
    enableGame()
})

document.getElementById("player-2-name").addEventListener("keyup", () =>{

    enableGame()
})

document.getElementById("new-game").addEventListener("click", event =>{
    const player1 = document.getElementById("player-1-name").value;
    const player2 = document.getElementById('player-2-name').value;
  game = new Game(player1, player2)

  document.getElementById("new-game").disabled = true

   let player1Value= document.getElementById('player-1-name')
         player1Value.value = ''

    let player2Value = document.getElementById('player-2-name')
             player2Value.value = ''


    updateUI()
})







})
