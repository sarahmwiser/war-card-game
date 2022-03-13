class Card{
    constructor (){
        this.suit = suit;
        this.value = value;
    }
}
class Deck{
    constructor(){
        const suits = ["Spades", "Diamonds", "Club", "Heart"];
        const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let deck = [];

    // create a deck of cards
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    
    // shuffle the cards
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
 
    console.log('The first five cards are:');
    
    // display 5 results
    for (let i = 0; i < 5; i++) {
        console.log(`${deck[i].Value} of ${deck[i].Suit}`)
    }
        
}   
}   console.log(x) 
class Menu{
    constructor(){
        this.playerDeck = [];
        this.computerDeck =[];
        this.score = [];

    }
    playGame(){
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
        }
        while(playerDeck.value > computerDeck.value){
            ps +1
        } if (this.decks[0].value < this.decks[1].value){
            cs +1
    }   console.log(ps + cs);

    
let menu = new Menu();
menu.playGame ();
