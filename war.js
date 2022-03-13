<<<<<<< HEAD
// This was suppose to be an interactive war game with 'the computer'
// but it didnt work and I ran out of time to fix it.



=======
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
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
<<<<<<< HEAD
}       // This was to create the deck
=======
}
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
function createDeck(){
let suit = ['Spade', 'Heart', 'Club', 'Diamond'];
let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
        
for (let s = 0; s < suit.length; s++){
    for( let v = 0; v < value.length; v++){

        deck.push(suit(s) + value(v));
    } return deck;
} 
<<<<<<< HEAD
};

class Player {
    constructor(){
        this.players = [];
=======
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
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
        this.score = 0;
        this.hand = [];
    }
    describe(){
<<<<<<< HEAD
       return this.players;
=======
       return this.player1;
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
    }
}


class Menu{
    constructor(){
        this.player = [];
    }

    startGame(){
        
<<<<<<< HEAD
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
=======
        const player1 = new Player(prompt('Enter your name: '));
        const computer = new Player('Computer');
        
            this.players.push(player1);
            this.players.push(computer);

        const gameDeck = new Deck();

        dealCards(deck);
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
            for ( let i = 0; i < 26; i++){
                this.players[0].push(playerDeck[i]);
                this.players[1].push(computerDeck[i+1]);
            }
        
<<<<<<< HEAD
        
=======

>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
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
<<<<<<< HEAD
       alert('Game Over Score: ${ps, cs}');
=======
       // alert('Game Over ${most points} Won')
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Flip Card
        2) Show Score
        `);
<<<<<<< HEAD
    }   
        // this was to have the interactive flipping of cards.
=======
    }
        
>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
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
<<<<<<< HEAD
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
=======
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

>>>>>>> 17998e28e19b27fb20e4cbf5c06cd385ff846dbe
let menu = new Menu();
menu.startGame();