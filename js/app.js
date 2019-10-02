// <!-- Functions -->

// this function was designed to use an overlay that says "Click to start" howver i can't get it to remove the visible class
// function ready() {
//   let overlays = Array.from(document.getElementsByClassName('overlay-text'));
//   // let cards = Array.from(document.getElementsByClassName('card'));
//   // let game = new GOLF(100, cards);
 
//   overlays.forEach(overlay => {
//       overlay.addEventListener('click', () => {
//           overlay.classList.remove('visible');
    
//       });
//   });











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


// ====================== FUNCTIONS ===============================
// ================================================================
// I'm actually not sure how to build the draw card function just yet
const drawCard = () => {
      r = (deck[Math.floor(Math.random()*deck.length)])
      return r
      // player1.cards.push(r);
      // cardsArr.splice(r,1);
}
drawCard()


// if a user clicks the deck i need it to draw a random card and make that card visible.
// the user can then click any card in their hand to replace it,
// this will automatically discard the card they clicked into the temporary discard pile
// OR 
// the user can discard it, and then select a facedown card to flip over! (it will just run the drawcard function and place a random card in that div?/array)

// now its the other persons turn



// PLAYERS
// for taking turns, put your players in an array, and then create a loop that will go back and forth between each player