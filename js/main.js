let elModalGame = document.querySelector('.modal-game');
let elHands = document.querySelector('.content');
let elModalBtn = document.querySelector('.modal-game__btn');
let elTitle = document.querySelector('.modal-game__title');
let elScoreCount = document.querySelector('.game__score-title');

elScoreCount.innerHTML = '0';

let count = 0;
let paper = 'paper';
let scissors =  'scissors';
let stone = 'stone';

let touchingFunc = (hand) => {
  elHands.style.display = 'none';
  elModalGame.style.display = 'flex';
  document.querySelector('.modal-game__img').src = `/img/${hand}.svg`;
  gameFunc();

  if (gameFunc(paper) == 'paper' && hand == 'paper') {
    elTitle.textContent = 'DRAW!';
  } 
  else if (gameFunc(scissors) == 'scissors' && hand == 'scissors') {
    elTitle.textContent = 'DRAW!';
  } 
  else if (gameFunc(stone) == 'stone' && hand == 'stone') {
    elTitle.textContent = 'DRAW!';
  } 
  else if (gameFunc(paper) == 'paper' && hand == 'stone') {
    elTitle.textContent = 'YOU LOSE!';
  } 
  else if (gameFunc(scissors) == 'scissors' && hand == 'paper') {
    elTitle.textContent = 'YOU LOSE!';
  } 
  else if (gameFunc(stone) == 'stone' && hand == 'scissors') {
    elTitle.textContent = 'YOU LOSE!';
  } 
  else if (gameFunc(paper) == 'paper' && hand == 'scissors') {
    elTitle.textContent = 'YOU WIN!';
    showScore();
  } 
  else if (gameFunc(scissors) == 'scissors' && hand == 'stone') {
    elTitle.textContent = 'YOU WIN!';
    showScore();
  } 
  else if (gameFunc(stone) == 'stone' && hand == 'paper') {
    elTitle.textContent = 'YOU WIN!';
    showScore();
  }  
}

function showScore() {
  elTitle.textContent = 'YOU WIN!';
  ++count;
  elScoreCount.innerHTML = '';
  elScoreCount.textContent = count;
}

elModalBtn.addEventListener('click', modalClose);

function modalClose() {
  elModalGame.style.display = 'none';
  elHands.style.display = 'flex';
}

let gameFunc = (comp) => {
  let arr = ["paper", "scissors", "stone"];
  var comp = arr[Math.floor(Math.random() * 3)];
  document.querySelector('#comp').src = `/img/${comp}.svg`;
  return comp
};