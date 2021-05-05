export default class Game {
    constructor(name1, name2){
        this.name1 = name1;
        this.name2 = name2;
       
    }
    getName(){
        return `player one ${this.name1} vs player two ${this.name2}`
    }
}
