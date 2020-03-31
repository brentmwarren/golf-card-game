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



let topOfDeck = null;
const discard = [];

// ====================== FUNCTIONS ===============================
// ================================================================



// I'm actually not sure how to build the draw card function just yet
const drawCard = (event) => {
  if (event.target.classList.contains("flipped") === false){
    
    // this is saying if the card has NOT been flipped do the thing below, which happens to be another conditional
    const rIndex = Math.floor(Math.random()*deck.length)
      r = (deck[rIndex])
      console.log(r)
      console.log(event.target)
      
      if(topOfDeck !== null){
        // this is saying - alright a card hasnt been flipped, BUT if my deck been flipped go ahead and discard the flipped deck card
        discard.push(deck.splice(rIndex,1));
        $(event.target).css('content',`url(${topOfDeck})`);
        // if turn == true add values to player1 if false add to player2
        // player1Hand =+ deck[rIndex].value
        


        $("#deck").removeClass("flipped")
        $("#deck").css('content',``)
        topOfDeck = null;

        $(event.target).css('content',`url(${discard})`);

      } else {
        $(event.target).css('content',`url(${r.img})`).addClass("flipped").attr('data-card-value',`${r.value}`);
      }
  } else {
    if(topOfDeck !== null && event.target.parentNode.classList.contains("deck") === false){
      $(event.target).css('content',`url(${topOfDeck})`).attr('data-card-value',`${r.value}`);
      $("#deck").removeClass("flipped")
      $("#deck").css('content',``)
        topOfDeck = null;
    }
  }
  if (event.target.parentNode.classList.contains("deck") === true){
    topOfDeck= r.img;
    console.log(topOfDeck);
  }
}


// oh wow. can't believe this was my first project. good to see you again old friend


// // THis is unfinished.
// const calculateWinner = () => {
//   // $("#player1#$card").value(value)
// $("player1.card").val()
// // this needs to compare the scores (which im going to add up as we go with += or -+, then use an alert to tell the user who won! )
// };

// console.log(calculateWinner())

//////////////////////////////

  // drawCard()

// !!!!!!!!!!!!BUTTONS!!!!!!!!!!!!!!

$('.card').on ('click',(event) => {
  drawCard(event);
}) // this function above replaced the next 60 lines of code...haha

// $('.deck').on ('click',(event) => {
//   drawCard(event);
// }) 

// $('.deck').on ('click',(event) => {
// replaceCard(event);
// });

// const replaceCard = (event) => {
//     if (event.target.classList.contains("flipped") === true) {
//       $(event.target).css('content',`url(${deck.img})`);
//   }
// }

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






// write a function to re-set the ID of the deck card to the flipped card in a users hand 

// so you click the deck once to get a new card to display. boom done. Then you can click the discard pile OR any other card.

// this puts the card you clicked in the discard pile!
// THEN you can override the css 
// when you click this needs to override the css class and add the deck-drawn card to the new spot. 


const popUp = () => {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const winner = () => {
  var winner = document.getElementById("winnerPopUp");
  winner.classList.toggle("show");
  compareScores();
}


// to pull the card data!
// document.getElementById("card1").dataset.cardValue


const compareScores = () => {
  player1Arr = []
  player2Arr = []
  
  $(".player1cards").each(function() {player1Arr.push($(this).attr(`data-card-value`))})
  $(".player2cards").each(function() {player2Arr.push($(this).attr(`data-card-value`))})
  
  if (arrSum(player1Arr) < arrSum(player2Arr)) 
  { 
  $(".winner").html("player 1 won")
  } else if (arrSum(player1Arr) < arrSum(player2Arr)) {
  $(".winner").html("player 2 won")
  } else {
    $(".winner").html("It's a tie!")
  }
  };
  
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)