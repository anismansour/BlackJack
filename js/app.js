const cards = [
  //spades
  { name: "spadeOne", value1: 1, value: 11, picture: "card spades A" },
  { name: "spadeTwo", value: 2, picture: "card spades r02" },
  { name: "spadeThree", value: 3, picture: "card spades r03" },
  { name: "spadeFour", value: 4, picture: "card spades r04" },
  { name: "spadeFive", value: 5, picture: "card spades r05" },
  { name: "spadeSix", value: 6, picture: "card spades r06" },
  { name: "spadeSeven", value: 7, picture: "card spades r07" },
  { name: "spadeEight", value: 8, picture: "card spades r08" },
  { name: "spadeNine", value: 9, picture: "card spades r09" },
  { name: "spadeTen", value: 10, picture: "card spades r10" },
  { name: "spadeJack", value: 10, picture: "card spades J" },
  { name: "spadeQueen", value: 10, picture: "card spades Q" },
  { name: "spadeKing", value: 10, picture: "card spades K" },

  //hearts
  { name: "heartOne", value1: 1, value: 11, picture: "card hearts A" },
  { name: "heartTwo", value: 2, picture: "card hearts r02" },
  { name: "heartThree", value: 3, picture: "card hearts r03" },
  { name: "heartFour", value: 4, picture: "card hearts r04" },
  { name: "heartFive", value: 5, picture: "card hearts r05" },
  { name: "heartSix", value: 6, picture: "card hearts r06" },
  { name: "heartSeven", value: 7, picture: "card hearts r07" },
  { name: "heartEight", value: 8, picture: "card hearts r08" },
  { name: "heartNine", value: 9, picture: "card hearts r09" },
  { name: "heartTen", value: 10, picture: "card hearts r10" },
  { name: "heartJack", value: 10, picture: "card hearts J" },
  { name: "heartQueen", value: 10, picture: "card hearts Q" },
  { name: "heartKing", value: 10, picture: "card hearts K" },
  //Clubs
  { name: "clubOne", value1: 1, value: 11, picture: "card clubs A" },
  { name: "clubTwo", value: 2, picture: "card clubs r02" },
  { name: "clubThree", value: 3, picture: "card clubs r03" },
  { name: "clubFour", value: 4, picture: "card clubs r04" },
  { name: "clubFive", value: 5, picture: "card clubs r05" },
  { name: "clubSix", value: 6, picture: "card clubs r06" },
  { name: "clubSeven", value: 7, picture: "card clubs r07" },
  { name: "clubEight", value: 8, picture: "card clubs r08" },
  { name: "clubNine", value: 9, picture: "card clubs r09" },
  { name: "clubTen", value: 10, picture: "card clubs r10" },
  { name: "clubJack", value: 10, picture: "card clubs J" },
  { name: "clubQueen", value: 10, picture: "card clubs Q" },
  { name: "clubKing", value: 10, picture: "card clubs K" },

  //Diamonds

  { name: "diamondOne", value1: 1, value: 11, picture: "card diamonds A" },
  { name: "diamondTwo", value: 2, picture: "card diamonds r02" },
  { name: "diamondThree", value: 3, picture: "card diamonds r03" },
  { name: "diamondFour", value: 4, picture: "card diamonds r04" },
  { name: "diamondFive", value: 5, picture: "card diamonds r05" },
  { name: "diamondSix", value: 6, picture: "card diamonds r06" },
  { name: "diamondSeven", value: 7, picture: "card diamonds r07" },
  { name: "diamondEight", value: 8, picture: "card diamonds r08" },
  { name: "diamondNine", value: 9, picture: "card diamonds r09" },
  { name: "diamondTen", value: 10, picture: "card diamonds r10" },
  { name: "diamondJack", value: 10, picture: "card diamonds J" },
  { name: "diamondQueen", value: 10, picture: "card diamonds Q" },
  { name: "diamondKing", value: 10, picture: "card diamonds K" }
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

let bet = 0;
let bank = 2500;
const TheGame = () => {
  let namePlayer1 = prompt("Let's start !! whats your name");

  const bet50 = () => {
    if (bank - 50 >= 0) {
      bet += 50;
      bank -= 50;
      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
    } else {
      return;
    }
  };
  const bet100 = () => {
    if (bank - 100 >= 0) {
      bet += 100;
      bank -= 100;

      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
    } else {
      return;
    }
  };
  const bet500 = () => {
    if (bank - 500 >= 0) {
      bet += 500;
      bank -= 500;
      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
    } else {
      return;
    }
  };

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
  document.getElementById("walletId").value = bank;
  document.getElementById("buttonChip50").addEventListener("click", bet50);
  document.getElementById("buttonChip100").addEventListener("click", bet100);
  document.getElementById("buttonChip500").addEventListener("click", bet500);
};
document.getElementById("startGame").addEventListener("click", TheGame);
var dealerHand = document.querySelector(".dealerHand");

const playRounds = () => {
  const dealerHit = () => {
    document.getElementById("dealerCard2").className =
      dealer.cardsInHand[1].picture;
    while (dealer.valueOfcards < 17) {
      var div = document.createElement("div");
      div.className = shuffle[0].picture;
      dealerHand.appendChild(div);
      dealer.cardsInHand.push(shuffle[0]);
      shuffle.splice(0, 1);
      dealer.valueOfcards = 0;
      checkDealerValue();
    }
  };

  //button hit function
  var playerHand = document.querySelector(".playerHand");
  function playerHit() {
    //
    var div = document.createElement("div");
    //
    player1.cardsInHand.push(shuffle[0]);
    div.className = shuffle[0].picture;
    playerHand.appendChild(div);
    shuffle.splice(0, 1);
    player1.valueOfcards = 0;
    checkPlayerValue();
  }

  //button stand function
  function standCard() {
    document.getElementById("dealerCard2").className =
      dealer.cardsInHand[1].picture;
    if (
      dealer.valueOfcards < 17 &&
      dealer.valueOfcards > player1.valueOfcards
    ) {
      bet = 0;
      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
      alert("player lost");
      return;
    } else if (dealer.valueOfcards >= 17) {
      if (dealer.valueOfcards > player1.valueOfcards) {
        bet = 0;
        document.getElementById("Bets").value = bet;
        document.getElementById("walletId").value = bank;
        alert("player lost");
        return;
      } else if (player1.valueOfcards > dealer.valueOfcards) {
        bank = bank + bet * 1.5;
        bet = 0;
        document.getElementById("Bets").value = bet;
        document.getElementById("walletId").value = bank;
        alert("player won");
        return;
      } else if (player1.valueOfcards === dealer.valueOfcards) {
        bank = bank + bet;
        bet = 0;
        document.getElementById("Bets").value = bet;
        document.getElementById("walletId").value = bank;
        alert("equal");
        return;
      }
    } else {
      dealerHit();
    }
  }

  // const checkWin = () => {
  //   if (player1.valueOfcards === 21 && dealer.valueOfcards === 21) {
  //     console.log("both won, both have a black jack");
  //     bank = bank + bet;
  //     bet = 0;
  //     document.getElementById("Bets").value = bet;
  //     document.getElementById("walletId").value = bank;
  //     return alert("equal");
  //   } else if (player1.valueOfcards === 21 && dealer.valueOfcards < 21) {
  //     console.log("player won with Blackjack");
  //     bank = bank + bet * 1.5;
  //     bet = 0;
  //     document.getElementById("Bets").value = bet;
  //     document.getElementById("walletId").value = bank;
  //     return alert("player won");
  //   } else if (player1.valueOfcards > dealer.valueOfcards) {
  //     bank = bank + bet * 1.5;
  //     bet = 0;
  //     document.getElementById("Bets").value = bet;
  //     document.getElementById("walletId").value = bank;
  //     return alert("player won");
  //   } else if (player1.valueOfcards < dealer.valueOfcards) {
  //     bank = bank - bet;
  //     bet = 0;
  //     document.getElementById("Bets").value = bet;
  //     document.getElementById("walletId").value = bank;
  //     return alert("player lost");
  //   }
  // };

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
  //console.log("the bet amount before game " + bet);
  //console.log("the bank amount before game " + bank);
  //function to deal the cards from the shuffled cards

  const firstDeal = () => {
    //while cards are not 2 on each hand
    while (dealer.cardsInHand.length < 2 || player1.cardsInHand.length < 2) {
      player1.cardsInHand.push(shuffle[0]);
      shuffle.splice(0, 1);
      dealer.cardsInHand.push(shuffle[0]);
      shuffle.splice(0, 1);

      // !!!!!!!!!!to test game with preset cards !!!!!!!!!
      // dealer.cardsInHand[1] = { name: "diamondNine", value: 9, picture: "" };

      //   player1.cardsInHand[0] = {
      //     name: "spadeOne",
      //     value1: 1,
      //     value: 11,
      //     picture: ""
      //   };
      //   player1.cardsInHand[1] = { name: "spadeJack", value: 10, picture: "" };
    }
  };
  //document.getElementById("playGame").addEventListener("click", firstDeal);
  firstDeal();

  document.getElementById("dealerCard1").className =
    dealer.cardsInHand[0].picture;
  document.getElementById("playerCard1").className =
    player1.cardsInHand[0].picture;
  document.getElementById("playerCard2").className =
    player1.cardsInHand[1].picture;

  const hideButtons = () => {
    if (player1.valueOfcards < 21) {
      document.getElementById("buttonHit").style.visibility = "visible";
      document.getElementById("buttonStand").style.visibility = "visible";
    } else {
      document.getElementById("dealerCard2").className =
        dealer.cardsInHand[1].picture;
      document.getElementById("buttonHit").style.visibility = "hidden";
      document.getElementById("buttonStand").style.visibility = "hidden";
    }
  };

  const checkPlayerLoss = () => {
    if (dealer.valueOfcards > 21) {
      document.getElementById("dealerCard2").className =
        dealer.cardsInHand[1].picture;
      bet = 0;
      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
      alert("player lost");
      return;
    }
  };

  // const checkPlayerValue = () => {
  //   for (let i = 0; i < player1.cardsInHand.length; i++) {
  //     if (
  //       player1.cardsInHand[i].name === "spadeOne" ||
  //       player1.cardsInHand[i].name === "heartOne" ||
  //       player1.cardsInHand[i].name === "clubOne" ||
  //       player1.cardsInHand[i].name === "diamondOne"
  //     ) {
  //       console.log("got an ace");
  //       let ace = confirm("do you want to use  ace as 11!");
  //       if (ace === true) {
  //         player1.valueOfcards += 11;
  //       } else {
  //         player1.valueOfcards += 1;
  //       }
  //     } else {
  //       //else for card is not an ace
  //       player1.valueOfcards =
  //         player1.valueOfcards + player1.cardsInHand[i].value;
  //     }
  //   }
  //   hideButtons();
  //   checkPlayerLoss();
  // };
  // checkPlayerValue();

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

  //If the dealer has an ace, and counting it as 11 would bring his total to 17 or more (but not over 21),
  //he must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays,
  //whereas the player always has the option of taking one or more cards.
  // test player ace !!!
  const checkPlayerValue = () => {
    for (let i = 0; i < player1.cardsInHand.length; i++) {
      player1.valueOfcards =
        player1.valueOfcards + player1.cardsInHand[i].value;

      if (dealer.valueOfcards > 21) {
        checkAce();
      }
    }
    hideButtons();
    checkPlayerLoss();
  };
  checkPlayerValue();

  // test player ace !!!

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

  const checkFirstGame = () => {
    if (player1.valueOfcards === 21 && dealer.valueOfcards === 21) {
      console.log("both won, both have a black jack");
      bank = bank + bet;
      bet = 0;
      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
      alert("equal");
      return;
    }
    if (player1.valueOfcards === 21 && dealer.valueOfcards < 21) {
      bank = bank + bet * 1.5;
      bet = 0;
      document.getElementById("Bets").value = bet;
      document.getElementById("walletId").value = bank;
      alert("player won");
      return;
    }

    checkFirstGame();

    //console.log("the bank is   " + bank);
    //console.log("the bet is   " + bet);
  };
  document.getElementById("buttonHit").addEventListener("click", playerHit);
  document.getElementById("buttonStand").addEventListener("click", standCard);
  console.log(player1);
  console.log(dealer);
};

document.getElementById("playGame").addEventListener("click", playRounds);
