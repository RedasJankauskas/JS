let score = JSON.parse(localStorage.getItem('score')) ||
{
  wins: 0,
  draws: 0,
  losses: 0
};


document.querySelector('.js-rock').addEventListener('click', () => {
Play('rock');
});

document.querySelector('.js-paper').addEventListener('click', () => {
Play('paper');
});

document.querySelector('.js-scissors').addEventListener('click', () => {
Play('scissors');
});

document.querySelector('.reset-score').addEventListener('click', () => {
  ResetScore();
})
document.querySelector('.auto-play').addEventListener('click', () => {
  AutoPlay();
})





function computerMove () {
  let number = Math.random()
  let result = '';

  if(number>=0 && number<1/3){
    result='rock';
  }

  else if(number>=1/3 && number<2/3){
    result='paper';
  }

  else if(number>=2/3 && number<=1){
    result='scissors';
  }

  return result;
}

function Play (move){
  CompMove=computerMove();
  let result = '';
  
  if(move==='rock'){
    if(CompMove === 'rock'){
      score.draws++;
      result = 'Draw!'
    }
    else if(CompMove === 'paper'){
      score.losses++;
      result = 'You lose!'
    }
    else if(CompMove === 'scissors'){
      score.wins++;
      result = 'You win!'
    }
  }

  if(move==='paper'){
    if(CompMove === 'rock'){
      score.wins++;
      result = 'You win!'
    }
    else if(CompMove === 'paper'){
      score.draws++;
      result = 'Draw!'
    }
    else if(CompMove === 'scissors'){
      score.losses++;
      result = 'You lose!'
    }
  }

  if(move==='scissors'){
    if(CompMove === 'rock'){
      score.losses++;
      result = 'You lose!'
    }
    else if(CompMove === 'paper'){
      score.wins++;
      result = 'You win!'
    }
    else if(CompMove === 'scissors'){
      score.draws++;
      result = 'Draw!'
    }
  }
  
  document.querySelector('.js-result').innerHTML=`The result is: ${result}`;
  document.querySelector('.js-moves').innerHTML=`Your move: <img src=Icons/${move}-emoji.png class="play-emoji">, Computer's move: <img src=icons/${CompMove}-emoji.png class="play-emoji">`;
  UpdateScore();
  localStorage.setItem('score', JSON.stringify(score));
  
}

function ResetScore(){
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  localStorage.removeItem('score');
  UpdateScore();
}

function UpdateScore () {
  document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}

var isPlaying = false;
var intervalId;

function AutoPlay(){
  if (!isPlaying){
  intervalId = setInterval( () => {
    const playerMove=computerMove();
    Play(playerMove);
  }, 1000)
  isPlaying = true;
}
else{
  clearInterval(intervalId);
  isPlaying = false;
}}

