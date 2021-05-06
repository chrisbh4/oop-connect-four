export default class Game {
    //Blueprint for the game class parent and it's children
    constructor(name1, name2,){
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayerIndicator = 1
    }
    getName(){
        return `player one ${this.name1} vs player two ${this.name2}`
    }

    //PHASE 2

    // create a method playInColumn that handles the click of the user
    playInColumn(){
        // this method will handle the click of the user
        //should change the value of the current player ( 1 ) to the otherPlayer ( 2 )
        // checks if currentPlayerIndicator value  is 1 then the value will
        if(this.currentPlayerIndicator === 1 ){
            this.currentPlayerIndicator = 2
        } else {
            this.currentPlayerIndicator = 1
        }
    }
}
