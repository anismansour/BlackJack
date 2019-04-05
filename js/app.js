const cards = [
  //spades
  { name: "spadeOne ", value1: 1, value2: 11, picture: "" },
  { name: "spadeTwo ", value: 2, picture: "" },
  { name: "spadeThree ", value: 3, picture: "" },
  { name: "spadeFour ", value: 4, picture: "" },
  { name: "spadeFive ", value: 5, picture: "" },
  { name: "spadeSix ", value: 6, picture: "" },
  { name: "spadeSeven ", value: 7, picture: "" },
  { name: "spadeEight ", value: 8, picture: "" },
  { name: "spadeNine ", value: 9, picture: "" },
  { name: "spadeTen ", value: 10, picture: "" },
  { name: "spadeJack ", value: 10, picture: "" },
  { name: "spadeQueen ", value: 10, picture: "" },
  { name: "spadeQueen ", value: 10, picture: "" },

  //hearts
  { name: "heartOne ", value1: 1, value2: 11, picture: "" },
  { name: "heartTwo ", value: 2, picture: "" },
  { name: "heartThree ", value: 3, picture: "" },
  { name: "heartFour ", value: 4, picture: "" },
  { name: "heartFive ", value: 5, picture: "" },
  { name: "heartSix ", value: 6, picture: "" },
  { name: "heartSeven ", value: 7, picture: "" },
  { name: "heartEight ", value: 8, picture: "" },
  { name: "heartNine ", value: 9, picture: "" },
  { name: "heartTen ", value: 10, picture: "" },
  { name: "heartJack ", value: 10, picture: "" },
  { name: "heartQueen ", value: 10, picture: "" },
  { name: "heartQueen ", value: 10, picture: "" },
  //Clubs
  { name: "clubOne ", value1: 1, value2: 11, picture: "" },
  { name: "clubTwo ", value: 2, picture: "" },
  { name: "clubThree ", value: 3, picture: "" },
  { name: "clubFour ", value: 4, picture: "" },
  { name: "clubFive ", value: 5, picture: "" },
  { name: "clubSix ", value: 6, picture: "" },
  { name: "clubSeven ", value: 7, picture: "" },
  { name: "clubEight ", value: 8, picture: "" },
  { name: "clubNine ", value: 9, picture: "" },
  { name: "clubTen ", value: 10, picture: "" },
  { name: "clubJack ", value: 10, picture: "" },
  { name: "clubQueen ", value: 10, picture: "" },
  { name: "clubQueen ", value: 10, picture: "" },

  //Diamonds

  { name: "diamondOne ", value1: 1, value2: 11, picture: "" },
  { name: "diamondTwo ", value: 2, picture: "" },
  { name: "diamondThree ", value: 3, picture: "" },
  { name: "diamondFour ", value: 4, picture: "" },
  { name: "diamondFive ", value: 5, picture: "" },
  { name: "diamondSix ", value: 6, picture: "" },
  { name: "diamondSeven ", value: 7, picture: "" },
  { name: "diamondEight ", value: 8, picture: "" },
  { name: "diamondNine ", value: 9, picture: "" },
  { name: "diamondTen ", value: 10, picture: "" },
  { name: "diamondJack ", value: 10, picture: "" },
  { name: "diamondQueen ", value: 10, picture: "" },
  { name: "diamondQueen ", value: 10, picture: "" }
];

class Player {
  constructor(name, cardsInHand, valueOfcards, wallet) {
    this.name = name;
    this.cardsInHand = cardsInHand;
    this.valueOfcards = valueOfcards;
    this.wallet = wallet;
  }
}

class TheDealer {
  constructor(cardsInHand, valueOfcards) {
    this.cardsInHand = cardsInHand;
    this.valueOfcards = valueOfcards;
  }
}

let dealer;
let player1;
let initPlayer = () => {
  // initiate dealer and player
  var namePlayer1 = prompt("Let's start !! whats your name");
  var bank = prompt("how much money you want");
  player1 = new Player();
  player1.name = namePlayer1;
  player1.wallet = bank;
  player1.valueOfcards = 0;
  player1.cardsInHand = [];
  dealer = new TheDealer();
  dealer.cardsInHand = [];
  dealer.valueOfcards = 0;
};
initPlayer();
//console.log("the palyer1 is  ");
//console.log(player1);

//function to shuffle the cards
let shuffle = [];
let random;
const shuffleCards = () => {
  while (cards.length > 0) {
    random = Math.floor(Math.random() * cards.length); //varialble to go through the cards
    shuffle.push(cards[random]); //push random card from cards to the new shuffle cards
    cards.splice(random, 1);
  }
};
shuffleCards();

//  function to bets

let bet = 0;
const bets = () => {
  bet = prompt("enter amount that you want to bet ");
  if (+bet > +player1.wallet) {
    //check the amount entered with the wallet of the player
    console.log("no enought money");
    bet = 0;
  } else {
    console.log("ready to play");
  }
};

bets();

console.log("the bet will be  " + bet);

console.log("the amount of the walllet is " + player1.wallet);

//function to deal the cards from the shuffled cards
const firstDeal = () => {
  //while cards are not 2 on each hand
  while (dealer.cardsInHand.length < 2 || player1.cardsInHand.length < 2) {
    player1.cardsInHand.push(shuffle[0]);
    shuffle.splice(0, 1);
    dealer.cardsInHand.push(shuffle[0]);
    shuffle.splice(0, 1);
  }
};
firstDeal();

// console.log("the player one !!!!");
// console.log(player1);
// console.log("the DEALER !!!!");
// console.log(dealer);

console.log("the name of the card is ");
console.log(player1.cardsInHand[0].value);

const checkPlayerValue = () => {
  for (let i = 0; i < player1.cardsInHand.length; i++) {
    if (
      player1.cardsInHand[i].name === "spadeOne" ||
      player1.cardsInHand[i].name === "heartOne" ||
      player1.cardsInHand[i].name === "clubOne" ||
      player1.cardsInHand[i].name === "diamondOne"
    ) {
      let ace = confirm("do you want to use  ace as 11!");
      if (ace === true) {
        player1.valueOfcards += 11;
      } else {
        player1.valueOfcards += 1;
      }
    } else {
      //else for card is not an ace
      player1.valueOfcards =
        player1.valueOfcards + player1.cardsInHand[i].value;
    }
  }
};
checkPlayerValue();
console.log("the value of the cards are   " + player1.valueOfcards);
