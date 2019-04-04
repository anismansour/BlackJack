console.log("running");
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
  constructor(name, cardInHand, valueOfcards, wallet) {
    this.name = name;
    this.cardInHand = cardInHand;
    this.valueOfcards = valueOfcards;
    this.wallet = wallet;
  }
}

const dealer = [
  {
    cardsInhand: [],
    cardsValue: 0
  }
];

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
//shuffleCards();
console.log(cards[2]);
