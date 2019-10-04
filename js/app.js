const deck = [
    {
      name: "A of Spades",
      value: 1,
      img: "pictures/card-pictures/AS.png"
    }, {
      name: "A of Clubs",
      value: 1,
      img: "pictures/card-pictures/AC.png"
    }, {
      name: "A of Hearts",
      value: 1,
      img: "pictures/card-pictures/AH.png"
    }, {
      name: "A of Diamonds",
      value: 1,
      img: "pictures/card-pictures/AD.png"
    }, {
      name: "2 of Spades",
      value: 2,
      img: "pictures/card-pictures/2S.png"
    }, {
      name: "2 of Clubs",
      value: 2,
      img: "pictures/card-pictures/2C.png"
    }, {
      name: "2 of Hearts",
      value: 2,
      img: "pictures/card-pictures/2H.png"
    }, {
      name: "2 of Diamonds",
      value: 2,
      img: "pictures/card-pictures/2D.png"
    }, {
      name: "3 of Spades",
      value: 3,
      img: "pictures/card-pictures/3S.png"
    }, {
      name: "3 of Clubs",
      value: 3,
      img: "pictures/card-pictures/3C.png"
    }, {
      name: "3 of Hearts",
      value: 3,
      img: "pictures/card-pictures/3H.png"
    }, {
      name: "3 of Diamonds",
      value: 3,
      img: "pictures/card-pictures/3D.png"
    }, {
      name: "4 of Spades",
      value: 4,
      img: "pictures/card-pictures/4S.png"
    }, {
      name: "4 of Clubs",
      value: 4,
      img: "pictures/card-pictures/4C.png"
    }, {
      name: "4 of Hearts",
      value: 4,
      img: "pictures/card-pictures/4H.png"
    }, {
      name: "4 of Diamonds",
      value: 4,
      img: "pictures/card-pictures/4D.png"
    }, {
      name: "5 of Spades",
      value: -5,
      img: "pictures/card-pictures/5S.png"
    }, {
      name: "5 of Clubs",
      value: -5,
      img: "pictures/card-pictures/5C.png"
    }, {
      name: "5 of Hearts",
      value: -5,
      img: "pictures/card-pictures/5H.png"
    }, {
      name: "5 of Diamonds",
      value: -5,
      img: "pictures/card-pictures/5D.png"
    }, {  
      name: "6 of Spades",
      value: 6,
      img: "pictures/card-pictures/6S.png"
    }, {  
      name: "6 of Clubs",
      value: 6,
      img: "pictures/card-pictures/6C.png"
    }, {  
      name: "6 of Hearts",
      value: 6,
      img: "pictures/card-pictures/6H.png"
    }, {  
      name: "6 of Diamonds",
      value: 6,
      img: "pictures/card-pictures/6D.png"
    }, {
      name: "7 of Spades",
      value: 7,
      img: "pictures/card-pictures/7S.png"
    }, {
      name: "7 of Clubs",
      value: 7,
      img: "pictures/card-pictures/7C.png"
    }, {
      name: "7 of Hearts",
      value: 7,
      img: "pictures/card-pictures/7H.png"
    }, {
      name: "7 of Diamonds",
      value: 7,
      img: "pictures/card-pictures/7D.png"
    }, {
      name: "8 of Spades",
      value: 8,
      img: "pictures/card-pictures/8S.png"
    }, {
      name: "8 of Clubs",
      value: 8,
      img: "pictures/card-pictures/8C.png"
    }, {
      name: "8 of Hearts",
      value: 8,
      img: "pictures/card-pictures/8H.png"
    }, {
      name: "8 of Diamonds",
      value: 8,
      img: "pictures/card-pictures/8D.png"
    }, {
      name: "9 of Spades",
      value: 9,
      img: "pictures/card-pictures/9S.png"
    }, {
      name: "9 of Clubs",
      value: 9,
      img: "pictures/card-pictures/9C.png"
    }, {
      name: "9 of Hearts",
      value: 9,
      img: "pictures/card-pictures/9H.png"
    }, {
      name: "9 of Diamonds",
      value: 9,
      img: "pictures/card-pictures/9D.png"
    }, {
      name: "10 of Spades",
      value: 10,
      img: "pictures/card-pictures/10S.png"
    }, {
      name: "10 of Clubs",
      value: 10,
      img: "pictures/card-pictures/10C.png"
    }, {
      name: "10 of Hearts",
      value: 10,
      img: "pictures/card-pictures/10H.png"
    }, {
      name: "10 of Diamonds",
      value: 10,
      img: "pictures/card-pictures/10D.png"
    }, {
      name: "J of Spades",
      value: 10,
      img: "pictures/card-pictures/JS.png"
    }, {
      name: "J of Clubs",
      value: 10,
      img: "pictures/card-pictures/JC.png"
    }, {
      name: "J of Hearts",
      value: 10,
      img: "pictures/card-pictures/JH.png"
    }, {
      name: "J of Diamonds",
      value: 10,
      img: "pictures/card-pictures/JD.png"
    }, {
      name: "Q of Spades",
      value: 10,
      img: "pictures/card-pictures/QS.png"
    }, {
      name: "Q of Clubs",
      value: 10,
      img: "pictures/card-pictures/QC.png"
    }, {
      name: "Q of Hearts",
      value: 10,
      img: "pictures/card-pictures/QH.png"
    }, {
      name: "Q of Diamonds",
      value: 10,
      img: "pictures/card-pictures/QD.png"
    }, {
      name: "K of Spades",
      value: 0,
      img: "pictures/card-pictures/KS.png"
    }, {
      name: "K of Clubs",
      value: 0,
      img: "pictures/card-pictures/KC.png"
    }, {
      name: "K of Hearts",
      value: 0,
      img: "pictures/card-pictures/KH.png"
    }, {
      name: "K of Diamonds",
      value: 0,
      img: "pictures/card-pictures/KD.png"
    }
  ]


  class Player  {
    constructor(name='Brent', score = 0, tempHand = [], hand = [], gamesWon = 0) {
    this.name = name;
    this.score = score;
    this.tempHand = tempHand
    this.hand = hand
    this.gamesWon = gamesWon;
    }
}

const player1 = new Player(`Brent`,0,[],0);
const player2 = new Player(`Obama`,0,[],0);

// tempHand1 = []
// tempHand2 = []

let topOfDeck = null;
const discard = [];

// ====================== FUNCTIONS ===============================
// ================================================================

const movetoDiscard = (img) => {
  console.log('moving img', img);
}


// I'm actually not sure how to build the draw card function just yet
const drawCard = (event) => {
  if (event.target.classList.contains("flipped") === false) {
    const rIndex = Math.floor(Math.random()*deck.length)
      r = (deck[rIndex])
      console.log(r)
      console.log(event.target)
      
      if(topOfDeck !== null){
       discard.push(deck.splice(rIndex,1));
       $(event.target).css('content',`url(${topOfDeck})`);
       console.log(discard);
       $(deck).css('content',`url(/Users/macuser/sei/deliverables/project-zero/pictures/card-pictures/blue_back.png)`)
      //  and i need to push the card being stored in discard array to the discard div
      } else {
        $(event.target).css('content',`url(${r.img})`).addClass("flipped");
        
      }
      
  } else {
    if(topOfDeck !== null && event.target.parentNode.classList.contains("deck") === false){
      movetoDiscard($(event.target).css('content'))
      $(event.target).css('content',`url(${topOfDeck})`);
      
    }
  }
  if (event.target.parentNode.classList.contains("deck") === true){
    topOfDeck= r.img;
    console.log(topOfDeck);
  }
}

//////////////////////////////

  // drawCard()

// !!!!!!!!!!!!BUTTONS!!!!!!!!!!!!!!

$('.card').on ('click',(event) => {
  drawCard(event);
}) // this function above replaced the next 60 lines of code...haha

$('.deck').on ('click',(event) => {
  drawCard(event);
}) 

// $('.deck').on ('click',(event) => {
// replaceCard(event);
// });

const replaceCard = (event) => {
    if (event.target.classList.contains("flipped") === true) {
      $(event.target).css('content',`url(${deck.img})`);
  }
}

// $('#card2').on ('click',() => {
//   drawCard();
// })

// $('#card3').on ('click',() => {
//   drawCard();
// })

// $('#card4').on ('click',() => {
//   drawCard();
// })

// $('#card5').on ('click',() => {
//   drawCard();
// })

// $('#card6').on ('click',() => {
//   drawCard();
// })

// $('#card7').on ('click',() => {
//   drawCard();
// })

// $('#card8').on ('click',() => {
//   drawCard();
// })

// $('#card9').on ('click',() => {
//   drawCard();
// })

// $('#card10').on ('click',() => {
//   drawCard();
// })

// $('#card11').on ('click',() => {
//   drawCard();
// })

// $('#card12').on ('click',() => {
//   drawCard();
// })

// $('#card13').on ('click',() => {
//   drawCard();
// })

// $('#card13').on ('click',() => {
//   drawCard();
// })
// ==========================================================
// $('#deck').on ('click',() => {
//   tempHand1.push(drawCard()); 
//   // and put it in the drawCard temp space
// const endOfGame = () =>

// })





// write a function to re-set the ID of the deck card to the flipped card in a users hand 

// so you click the deck once to get a new card to display. boom done. Then you can click the discard pile OR any other card.

// this puts the card you clicked in the discard pile!
// THEN you can override the css 
// when you click this needs to override the css class and add the deck-drawn card to the new spot. 


// 1) if the deck card has a class of flipped THEN listen for another click and put that card where the click happes






// if the card has the flipped ID - move that card to the discard pile

// I want to be able to have a score displayed when all the users cards have been flipped

// theres needs to be a comparision of the cards in each persons and then add a Round won point to the user with the best score

// lets make it useable and then i'll work on limiting each players actions// 

// PLAYERS
// for taking turns, put your players in an array, and then create a loop that will go back and forth between each player
