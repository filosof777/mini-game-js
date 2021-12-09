let elModalGame = document.querySelector('.modal-game');
let elHands = document.querySelector('.content');
let elModalBtn = document.querySelector('.modal-game__btn');

let touchingFunc = (hand) => {
  elHands.style.display = 'none';
  elModalGame.style.display = 'flex';
  document.querySelector('.modal-game__img').src = `/img/${hand}.svg`;

  gameFunc()
}


elModalBtn.addEventListener('click', modalClose);

function modalClose() {
  elModalGame.style.display = 'none';
  elHands.style.display = 'flex';
}

let gameFunc = () => {
  let arr = ["paper", "scissors", "stone"];
  let comp = arr[Math.floor(Math.random() * 3)];
  document.querySelector('#comp').src = `/img/${comp}.svg`;
  return comp
}



