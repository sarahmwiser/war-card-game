class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}
class Deck{
    constructor(){
        this.cards = [];
    }
}
function createDeck(){
let suit = ['Spade', 'Heart', 'Club', 'Diamond'];
let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
        
for (let s = 0; s < suit.length; s++){
    for( let v = 0; v < value.length; v++){

        deck.push(suit(s) + value(v));
    } return deck;
} 
}
function shuffleDeck(playerDeck, computerDeck){

let index = suit.length, randomIndex1;
//let playerDeck = randomIndex1;
//let computerDeck = randomIndex2;
for (index != 0; index < 26; index ++){
   randomIndex1 = Math.floor(Math.random()* index); index--;
let index2 = value.length, randomIndex2;
while (index2 != 0){
   randomIndex2 = Math.floor(Math.random() * index2); index2--;
}} return playerDeck + computerDeck;
}

//for (let card of deck.cards){
  //  console.log(card.suit + ' ' + card.value);
//}

class Player {
    constructor(player1){
        this.player1 = player1;
        this.score = 0;
        this.hand = [];
    }
    describe(){
       return this.player1;
    }
}


class Menu{
    constructor(){
        this.player = [];
    }

    startGame(){
        
        const player1 = new Player(prompt('Enter your name: '));
        const computer = new Player('Computer');
        
            this.players.push(player1);
            this.players.push(computer);

        const gameDeck = new Deck();

        dealCards(deck);
            for ( let i = 0; i < 26; i++){
                this.players[0].push(playerDeck[i]);
                this.players[1].push(computerDeck[i+1]);
            }
        

        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
            case '1':
                this.flipCards()
                break;
            case '2':
                this.showScore()
                break;
            default:
                selection = 0
            }  
        selection = this.showMainMenuOptions();
        }
       // alert('Game Over ${most points} Won')
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Flip Card
        2) Show Score
        `);
    }
        
    flipCards(){
        let counter = 1; 
        do {
          let playRound = confirm(`Ready to flip cards for round ${counter}
                current score: ${this.players[0].name} - ${this.players[0].score} :
                 ${this.players[1].name} - ${this.players[1].score}`);
          let playerCard = this.players[0].hand.pop();
          let computerCard = this.players[1].hand.pop();
          alert(showScore(playerCard, computerCard)) 
          counter++;
        } while ((playRound == true)  || counter <= 26);
        checkForGameWinner()
    }                     
    showScore(){
        
       let ps = this.players[0].score;
       let cs = this.players[1].score;

       if (value = 'K'){
           value = 13;
       } else if (value = 'Q'){
           value = 12;
       } else if (value = 'J'){
           value = 11;
       } else if (value = 'A'){
           value = 1;
       } else value == num;
           return value;
    }
       
       if (player1Deck.value > computerDeck.value){
           ps + 1;
       } else if (computerDeck.value > player1Deck.value){
           cs + 1;
       } else;
    } return ps + cs;
} 

let menu = new Menu();
menu.startGame();