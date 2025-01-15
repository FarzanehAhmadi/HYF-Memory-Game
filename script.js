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
  const randomIndex1 = Math.floor(Math.random()* 12)
  const randomIndex2 = Math.floor(Math.random()* 12)
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



function flipCard() {
  const cardInner = this;
  if (cardInner.classList.contains('flipped')) {
    cardInner.classList.remove('flipped');
  } else {
    cardInner.classList.add('flipped');
  }
}
