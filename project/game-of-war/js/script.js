
let constestant1;
let constestant2;
let answer;


console.log("Hello! Would you like to play a card game of War?");
answer = prompt("Yes or No?")

// Set up as switch below to determing whether to play a game or not based on the playres choice above.
switch(answer){
        case "No":
        case "no": 
        console.log("Goodbye.");
        break;
        case "yes":
        case "Yes":    
        console.log("Let's play War!");
        
 
          
    
constestant1 = prompt("Contestant 1 please enter your name.", constestant1);
console.log ('Hello ', constestant1);

constestant2 = prompt("Contestant 2 please enter your name.", constestant2);
console.log ('Hello ', constestant2);

// 4 suits with 13 possible ranks for cards gives us a deck of 52, scores 1 thru 13 assigned to indivual cards.
let suits =['Hearts','Spades','Clubs','Diamonds'];
let ranks = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
let score = [1,2,3,4,5,6,7,8,9,10,11,12,13];


class Carddeck {
    constructor(deck) {
        this.deck = deck;
    }
}   
////// The outer forloop (suits) runs 4 times, once for each suit, the inner loop runs for 13 ranks
// at the end of the inner loop this.deck has the next card added to the array 
//and the score of that card pushed resulting in a proper 
//52 card deck.
        let deck = [];
            for(let i=0; i<suits.length;i++) {
             for(let j=0;j< ranks.length;j++) {
                let card1 = {Rank:ranks[j], Suit:suits[i],Score:score[j]}; 
                deck.push(card1,); 
                }
            } 

//function shuffles the deck containing cards that have been scored.

             let shuffle = []
                for(let i=deck.length-1; i>0; i-=1) {
                 let j= Math.floor(Math.random()*(i+1));
                 let holder = deck[i];
                 deck[i]=deck[j];
                 deck[j]=holder;
                 let card2 = {deck1:ranks[j], deck:suits[i]}
                    shuffle.push(card2);
                }

// split the shuffled deck into two arrays of 26 cards each, 
//one for player one and another for player 2. 
// it is based on the original odd/even location in parent deck array.

let play1 = [];
let play2 = [];
                let deal1= []
                for (let i= 0; i < deck.length; i++) {
                   if ((i+2)%2==0){
                       play2.push(deck[i]);
                   }
                   else {
                       play1.push(deck[i]);
                   }
                }
    
           
let deck1 = new Carddeck (deck);
console.log(deck1);  /// outputs a full deck of shuffled cards to the console.logS

console.log(play1); // outputs player one's cards, "26 card array"

console.log(play2);// outputs player two's cards, "26 card array"

/// Play the game!!

let round = 1;
let pot1 = [];
let pot2 = [];


while (round<2000){
    let hand1 = play1.shift(); ///removes the 1st element in play1 deck array.
    let hand2 = play2.shift(); //removes the 1st element in play2 deck array.
        console.log('Player 1 has ',hand1);
        console.log('Player 2 has ',hand2);
        // if the score for each hand is equal, its a War, otherwise continue thru logic
    if (hand1.Score !== hand2.Score) {
        pot1.push(hand1); // adds hand1 card to pot1
        pot2.push(hand2); // adds hand2 card to pot2
        

        // compare card hands and determine winner.
        if (hand1.Score > hand2.Score) 
            play1 = play1.concat(pot1,pot2); 
            else play2 = play2.concat(pot1,pot2); 
            if (hand1.Score > hand2.Score) 
                console.log("Player 1 wins round. Has ",play1.length," cards.", " and Player two has",play2.length," cards.")
                else console.log("Player 2 wins round. Has ",play2.length," cards.", " and Player one has",play1.length," cards.")
                        
             pot1 = []; // clear the pot in prep for the next round
             pot2 = []; // clear the pot in prep for the next round

             if (play2.length === 0) {
                 console.log("Player2 loses.")
                 break; 
             }
             else if (play1.length === 0) {
                 console.log("Player 1 loses.")
                 break;
             }
             round ++; // advances the round

             /// checks when the conditions of war are met if the players have enough cards to go to war.
     } else if (play1.length <= 3 || play2.length <= 3 ){
                console.log ("Tie, and not enough cards for war.")
                if (play1.length>play2.length)
                console.log("player 1 wins! ",play1)
                    else {
                console.log ("player 2 has ", play2);
    };
                break;
     } else {
             pot1.push(hand1);// deals a card to compare for Player 1
             pot2.push(hand2); // deals a card to compare for Player 2

             pot1.push(play1.shift()); /// Next 3 lines push 3 cards to player ones's pot
             pot1.push(play1.shift());
             pot1.push(play1.shift());

             pot2.push(play2.shift());/// Next 3 lines push 3 cards to player two's pot
             pot2.push(play2.shift());
             pot2.push(play2.shift());

             console.log("Tie! It's War!!"); ///announces the war conidition
        }
     }   

/* announces the final winner of the game, or a tie, and how many cards each player has one player 
hasn't won all the cards after 2000 rounds.
*/
if (play1.length>play2.length)
console.log(constestant1," wins! ",play1)
    else if (play1.length<play2.length) {
        console.log (constestant2," wins! ", play2);
    }  else {console.log("It's a tie!");       
        
    };


}
