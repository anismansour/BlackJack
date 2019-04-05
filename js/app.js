const cards = [
  //spades
  { name: "spadeOne", value1: 1, value: 11, picture: "" },
  { name: "spadeTwo", value: 2, picture: "" },
  { name: "spadeThree", value: 3, picture: "" },
  { name: "spadeFour", value: 4, picture: "" },
  { name: "spadeFive", value: 5, picture: "" },
  { name: "spadeSix", value: 6, picture: "" },
  { name: "spadeSeven", value: 7, picture: "" },
  { name: "spadeEight", value: 8, picture: "" },
  { name: "spadeNine", value: 9, picture: "" },
  { name: "spadeTen", value: 10, picture: "" },
  { name: "spadeJack", value: 10, picture: "" },
  { name: "spadeQueen", value: 10, picture: "" },
  { name: "spadeQueen", value: 10, picture: "" },

  //hearts
  { name: "heartOne", value1: 1, value: 11, picture: "" },
  { name: "heartTwo", value: 2, picture: "" },
  { name: "heartThree", value: 3, picture: "" },
  { name: "heartFour", value: 4, picture: "" },
  { name: "heartFive", value: 5, picture: "" },
  { name: "heartSix", value: 6, picture: "" },
  { name: "heartSeven", value: 7, picture: "" },
  { name: "heartEight", value: 8, picture: "" },
  { name: "heartNine", value: 9, picture: "" },
  { name: "heartTen", value: 10, picture: "" },
  { name: "heartJack", value: 10, picture: "" },
  { name: "heartQueen", value: 10, picture: "" },
  { name: "heartQueen", value: 10, picture: "" },
  //Clubs
  { name: "clubOne", value1: 1, value: 11, picture: "" },
  { name: "clubTwo", value: 2, picture: "" },
  { name: "clubThree", value: 3, picture: "" },
  { name: "clubFour", value: 4, picture: "" },
  { name: "clubFive", value: 5, picture: "" },
  { name: "clubSix", value: 6, picture: "" },
  { name: "clubSeven", value: 7, picture: "" },
  { name: "clubEight", value: 8, picture: "" },
  { name: "clubNine", value: 9, picture: "" },
  { name: "clubTen", value: 10, picture: "" },
  { name: "clubJack", value: 10, picture: "" },
  { name: "clubQueen", value: 10, picture: "" },
  { name: "clubQueen", value: 10, picture: "" },

  //Diamonds

  { name: "diamondOne", value1: 1, value: 11, picture: "" },
  { name: "diamondTwo", value: 2, picture: "" },
  { name: "diamondThree", value: 3, picture: "" },
  { name: "diamondFour", value: 4, picture: "" },
  { name: "diamondFive", value: 5, picture: "" },
  { name: "diamondSix", value: 6, picture: "" },
  { name: "diamondSeven", value: 7, picture: "" },
  { name: "diamondEight", value: 8, picture: "" },
  { name: "diamondNine", value: 9, picture: "" },
  { name: "diamondTen", value: 10, picture: "" },
  { name: "diamondJack", value: 10, picture: "" },
  { name: "diamondQueen", value: 10, picture: "" },
  { name: "diamondQueen", value: 10, picture: "" }
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
const TheGame = () => {
  let namePlayer1 = prompt("Let's start !! whats your name");
  let bank = Number(prompt("how much money you want"));
  let bet = Number(prompt("enter amount that you want to bet"));
  const initPlayer = () => {
    // initiate dealer and player

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

  const bets = () => {
    //bet = prompt("enter amount that you want to bet"); //promp box will give string  => need to change it to number
    if (bet > player1.wallet) {
      //check the amount entered with the wallet of the player
      console.log("no enought money");
      bet = 0;
    } else {
      console.log("ready to play");
      bank = bank - bet;
    }
  };

  bets();
  console.log("the bet amount before game " + bet);
  console.log("the bank amount before game " + bank);
  //function to deal the cards from the shuffled cards
  const firstDeal = () => {
    //while cards are not 2 on each hand
    while (dealer.cardsInHand.length < 2 || player1.cardsInHand.length < 2) {
      //   player1.cardsInHand.push(shuffle[0]);
      //   shuffle.splice(0, 1);
      //   dealer.cardsInHand.push(shuffle[0]);
      //   shuffle.splice(0, 1);

      dealer.cardsInHand[0] = {
        name: "diamondOne",
        value1: 1,
        value: 11,
        picture: ""
      };
      dealer.cardsInHand[1] = { name: "diamondJack", value: 10, picture: "" };

      player1.cardsInHand[0] = {
        name: "spadeOne",
        value1: 1,
        value: 11,
        picture: ""
      };
      player1.cardsInHand[1] = { name: "spadeJack", value: 10, picture: "" };
    }
  };
  firstDeal();

  const checkPlayerValue = () => {
    for (let i = 0; i < player1.cardsInHand.length; i++) {
      if (
        player1.cardsInHand[i].name === "spadeOne" ||
        player1.cardsInHand[i].name === "heartOne" ||
        player1.cardsInHand[i].name === "clubOne" ||
        player1.cardsInHand[i].name === "diamondOne"
      ) {
        console.log("got an ace");
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

  // console.log("the value of the cards are   " + player1.valueOfcards);

  //If the dealer has an ace, and counting it as 11 would bring his total to 17 or more (but not over 21),
  //he must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays,
  //whereas the player always has the option of taking one or more cards.

  console.log("the value of the dealer card is " + dealer.cardsInHand[0].value);
  const checkAce = () => {
    // if the total is more than 21 we check if there is an ace. is yes we change it to 1.
    for (let i = 0; i < dealer.cardsInHand.length; i++) {
      if (
        dealer.cardsInHand[i].name === "spadeOne" ||
        dealer.cardsInHand[i].name === "heartOne" ||
        dealer.cardsInHand[i].name === "clubOne" ||
        dealer.cardsInHand[i].name === "diamondOne"
      ) {
        dealer.valueOfcards -= 10;
        if (dealer.valueOfcards < 21) {
          return;
        }
      }
    }
  };

  const checkDealerValue = () => {
    //ACES WILL TAKE A VALUE OF 11 until we check with the ace function
    for (let i = 0; i < dealer.cardsInHand.length; i++) {
      dealer.valueOfcards = dealer.valueOfcards + dealer.cardsInHand[i].value;
    }
    if (dealer.valueOfcards > 21) {
      checkAce();
    }
  };
  checkDealerValue();

  const checkNaturalsWin = () => {
    if (player1.valueOfcards === 21 && dealer.valueOfcards === 21) {
      console.log("both won, both have a black jack");
      bank = bank + bet;
    }
    if (player1.valueOfcards === 21 && dealer.valueOfcards < 21) {
      console.log("player won with Blackjack");
      bank = bank + bet * 1.5;
    }
    // if (dealer.valueOfcards === 21 && player1.valueOfcards < 21)
    //   console.log("dealer has blackJack");
    // bank = bank + bet;
  };
  checkNaturalsWin();
  console.log("the bank is   " + bank);
  console.log("the bet is   " + bet);
};

const checkNextMove = () => {};
TheGame();
