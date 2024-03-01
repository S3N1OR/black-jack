let deck = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function drawCard() {
  if (deck.length === 0) {
    alert("Колода карт пуста!");
    return;
  }
  return deck.pop();
}

function calculatePoints(cards) {
  let sum = 0;
  let numAces = 0;
  for (let card of cards) {
    if (card === "A") {
      numAces++;
      sum += 11;
    } else if (card === "J" || card === "Q" || card === "K") {
      sum += 10;
    } else {
      sum += parseInt(card);
    }
  }
  while (sum > 21 && numAces > 0) {
    sum -= 10;
    numAces--;
  }
  return sum;
}

shuffle(deck);
let player1Cards = [];
let player2Cards = [];
let player1Points = 0;
let player2Points = 0;

let deckAnimPos1 = -107;

function deckAnim1() {
  document
    .getElementById("anim__deck")
    .style.setProperty("--deckAnimPos1", deckAnimPos1 + "vmin");

  deckAnimPos1 += 17.5;
  if (deckAnimPos1 > -37) {
    deckAnimPos1 = -107;
  }
}

function take1() {
  if (deck.length != 0) {
    const numberOfCards =
      document.getElementById("selected__card1").childElementCount;
    const card = drawCard();
    player1Cards.push(card);
    const selectedCardElement = document.createElement("div");
    selectedCardElement.classList.add("card__item");

    switch (card) {
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        selectedCardElement.classList.add("card__item" + card);
        break;
      case "J":
        selectedCardElement.classList.add("card__itemJ");
        break;
      case "Q":
        selectedCardElement.classList.add("card__itemQ");
        break;
      case "K":
        selectedCardElement.classList.add("card__itemK");
        break;
      case "A":
        selectedCardElement.classList.add("card__itemA");
        break;
    }

    if (numberOfCards == 5) {
      document.getElementById("selected__card1").innerHTML = "";
      document
        .getElementById("selected__card1")
        .appendChild(selectedCardElement);
    } else {
      document
        .getElementById("selected__card1")
        .appendChild(selectedCardElement);
    }
    player1Points = calculatePoints(player1Cards);
    document.getElementById("point1").innerText = player1Points + "/21";
    if (
      player1Cards.length === 2 &&
      player1Cards[0] === "A" &&
      player1Cards[1] === "A"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "A" &&
      player1Cards[1] === "10"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "10" &&
      player1Cards[1] === "A"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "A" &&
      player1Cards[1] === "J"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "J" &&
      player1Cards[1] === "A"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "A" &&
      player1Cards[1] === "Q"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "Q" &&
      player1Cards[1] === "A"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "A" &&
      player1Cards[1] === "K"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player1Cards.length === 2 &&
      player1Cards[0] === "K" &&
      player1Cards[1] === "A"
    ) {
      document.getElementById("player1win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    }

    document.getElementById("anim__deck").classList.add("start__anim-deck1");

    deckAnim1();

    setTimeout(function () {
      document
        .getElementById("anim__deck")
        .classList.remove("start__anim-deck1");
    }, 100);
    playCardSound();
  }
}

let deckAnimPos2 = -107;

function deckAnim2() {
  document
    .getElementById("anim__deck")
    .style.setProperty("--deckAnimPos2", deckAnimPos2 + "vmin");

  deckAnimPos2 += 17.5;
  if (deckAnimPos2 > -37) {
    deckAnimPos2 = -107;
  }
}

function take2() {
  if (deck.length != 0) {
    const numberOfCards =
      document.getElementById("selected__card2").childElementCount;
    const card = drawCard();
    player2Cards.push(card);
    const selectedCardElement = document.createElement("div");
    selectedCardElement.classList.add("card__item");

    switch (card) {
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        selectedCardElement.classList.add("card__item" + card);
        break;
      case "J":
        selectedCardElement.classList.add("card__itemJ");
        break;
      case "Q":
        selectedCardElement.classList.add("card__itemQ");
        break;
      case "K":
        selectedCardElement.classList.add("card__itemK");
        break;
      case "A":
        selectedCardElement.classList.add("card__itemA");
        break;
    }

    if (numberOfCards == 5) {
      document.getElementById("selected__card2").innerHTML = "";
      document
        .getElementById("selected__card2")
        .appendChild(selectedCardElement);
    } else {
      document
        .getElementById("selected__card2")
        .appendChild(selectedCardElement);
    }
    player2Points = calculatePoints(player2Cards);
    document.getElementById("point2").innerText = player2Points + "/21";

    if (
      player2Cards.length === 2 &&
      player2Cards[0] === "A" &&
      player2Cards[1] === "A"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "A" &&
      player2Cards[1] === "10"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "10" &&
      player2Cards[1] === "A"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "A" &&
      player2Cards[1] === "J"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "J" &&
      player2Cards[1] === "A"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "A" &&
      player2Cards[1] === "Q"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "Q" &&
      player2Cards[1] === "A"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "A" &&
      player2Cards[1] === "K"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    } else if (
      player2Cards.length === 2 &&
      player2Cards[0] === "K" &&
      player2Cards[1] === "A"
    ) {
      document.getElementById("player2win").classList.remove("none");
      document.getElementById("container").classList.add("blur");
    }

    document.getElementById("anim__deck").classList.add("start__anim-deck2");

    deckAnim2();

    setTimeout(function () {
      document
        .getElementById("anim__deck")
        .classList.remove("start__anim-deck2");
    }, 100);
    playCardSound();
  }
}

function playCardSound() {
  const cardSound = document.getElementById("cardSound");
  cardSound.play();
}

function restartGame() {
  player1Cards = [];
  player2Cards = [];
  player1Points = 0;
  player2Points = 0;
  deckAnimPos1 = -107;
  deckAnimPos2 = -107;
  deck = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  document.getElementById("selected__card1").innerHTML = "";
  document.getElementById("selected__card2").innerHTML = "";
  document.getElementById("point1").innerText = "0" + "/21";
  document.getElementById("point2").innerText = "0" + "/21";

  document.getElementById("player1win").classList.add("none");
  document.getElementById("player2win").classList.add("none");

  document.getElementById("container").classList.remove("blur");

  shuffle(deck);
}
