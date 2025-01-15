const containerElement = document.querySelector('.container');

// Title
const titleElement = document.createElement('h1');
titleElement.classList.add('title');
titleElement.innerHTML = 'Memory Game';

containerElement.appendChild(titleElement);

// Card Elements
const cardElement = document.createElement('div');
cardElement.classList.add('card-grid');
containerElement.appendChild(cardElement);

//Week2

const pictures = [
  {
   id :'pic1',
   name : 'cat',
   url :'/assets/cat.jpg'
  },
  {
   id :'pic2',
   name : 'chicken',
   url :'/assets/chicken.jpg',
  },
  {
   id :'pic3',
   name : 'dog',
   url :'/assets/dog.jpg',
  },
  {
   id :'pic4',
   name : 'elephant',
   url :'/assets/elephant.jpg',
  },{
   id :'pic5',
   name : 'frog',
   url :'/assets/frog.jpg',
  },{
   id :'pic6',
   name : 'lion',
   url :'/assets/lion.jpg',
  },
 ]

 const picList = [];

pictures.forEach( (pic) => {
  picList.push(pic);
  picList.push(pic);
})

//Shuffle
for(let i = 0; i < 1000 ; i++){
  const randomIndex1 = Math.floor(Math.random()* picList.length)
  const randomIndex2 = Math.floor(Math.random()* picList.length)
  const temp = picList[randomIndex1];
  picList[randomIndex1] = picList[randomIndex2]
  picList[randomIndex2] = temp;
}

function createCard (pic){
 
  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner'
  cardInner.id = `card-${pic.id}`;

  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  backImg = document.createElement('img');
  backImg.src ="https://github.com/FarzanehAhmadi/HYF-Memory-Game/blob/main/assets/card-backside.jpg?raw=true"
  backImg.alt = "Back of the card";
  cardBack.appendChild(backImg)

  const cardFront = document.createElement('div');
  cardFront.className = 'card-front'
  frontImg = document.createElement ('img');
  frontImg.src = pic.url;
  frontImg.alt = "Front of the card";
  cardFront.appendChild(frontImg);

  cardInner.appendChild(cardBack);
  cardInner.appendChild(cardFront);
  cardInner.addEventListener('click', flipCard);

  return cardInner;
}

picList.forEach((pic) => {
  const card = createCard(pic);
  cardElement.appendChild(card);
})


let gameStarted = false; //week3

function flipCard() {

  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }

  const cardInner = this;

  if (flippedCards.length >= 2 || cardInner.classList.contains('flipped')) {
    return;
  } 
  cardInner.classList.add('flipped');
  flippedCards.push(cardInner)

  countPlayerMoves();

  if (flippedCards.length === 2) {
    setTimeout(() => {
      flippedCards.forEach((card) => card.classList.remove('flipped'));
      flippedCards = []; // Reset for the next pair
    }, flipDelay);
  }
}

//Week3

//Player moves
let moveCounter = 0;

  function countPlayerMoves(){
    moveCounter ++;
    moveCounterElement.innerText = `Moves: ${moveCounter}`
  }

const statsElement = document.createElement('div');
statsElement.classList.add('stats');
containerElement.appendChild(statsElement);

const moveCounterElement = document.createElement('p');
statsElement.appendChild(moveCounterElement);
moveCounterElement.innerText = `Moves: 0`

// Timer

const timerElement = document.createElement('p');
statsElement.appendChild(timerElement);
timerElement.classList.add('timer');
timerElement.innerText = `Time: 00.00.00`;

let timer;
let seconds = 0;
function startTimer(){
  if(!timer){
    timer = setInterval(() => {
      seconds++;
      timerElement.innerText = formatTime(seconds);
    }, 1000);
  }
}
function formatTime(totalSeconds){
  const hours = Math.floor(totalSeconds/3600).toString().padStart(2,'0');
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2,'0');
  const secs = (totalSeconds %60).toString().padStart(2,'0');
  return `Time: ${hours}.${minutes}.${secs}`
}

//Track Flipped Cards
let flippedCards = [];
const flipDelay = 2000;