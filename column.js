export default class Column {
constructor(){
    this.token = [];

  }

     add(playerNum){
        //this.token.push(tokenPosition)
        return this.token.push(playerNum)
        }


    getTokenAtRow(rowIndex){
       return this.token[5 - rowIndex]
    }
    isFull(){
      return this.token.length === 6
   //   if(this.token[0]){
   //      return
     //}
    }


}
