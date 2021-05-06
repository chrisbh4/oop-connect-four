export default class Column {
constructor(){
    this.token = [];

  }

     add(playerNum){
        //this.token.push(tokenPosition)
        return this.token.push(playerNum)
        }


    getTokenAt(rowIndex){
       return this.tokens[rowIndex]
    }

}
