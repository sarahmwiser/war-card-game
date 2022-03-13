// This was suppose to be an interactive war game with 'the computer'
// but it didnt work and I ran out of time to fix it.



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
}       // This was to create the deck
function createDeck(){
let suit = ['Spade', 'Heart', 'Club', 'Diamond'];
let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
        
for (let s = 0; s < suit.length; s++){
    for( let v = 0; v < value.length; v++){

        deck.push(suit(s) + value(v));
    } return deck;
} 
};

class Player {
    constructor(){
        this.players = [];
        this.score = 0;
        this.hand = [];
    }
    describe(){
       return this.players;
    }
}


class Menu{
    constructor(){
        this.player = [];
    }

    startGame(){
        
        const player1 = new Player('Player1');
        const computer = new Player('Computer');
        
            player1.push;
            computer.push;
                // this was to give # value to all cards
        const gameDeck = new Deck();
        let value = this.value;

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

      

        // this was to divid the deck into two

        dealCards(gameDeck){
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
       alert('Game Over Score: ${ps, cs}');
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Flip Card
        2) Show Score
        `);
    }   
        // this was to have the interactive flipping of cards.
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
        checkForGameWinner();
                      // this was to keep score of both hands.   
    showScore();
       let pv = player1.value;
       let cv = computer.value; 
       let ps = this.players[0].score;
       let cs = this.players[1].score;

       if (pv > cv){
           ps +1;
       } else if (pv < cv){
           cs +1;
       } else;

       return ps + cs;
    
    }}
let menu = new Menu();
menu.startGame();