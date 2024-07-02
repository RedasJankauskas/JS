let score = JSON.parse(localStorage.getItem('score')) ||
{
  wins: 0,
  losses: 0,
  draws: 0
};


window.onload =function (){
  document.querySelector('.js-rock-button').addEventListener('click', () => {
  PlayGame('rock');
  })

  document.querySelector('.js-paper-button').addEventListener('click', () => {
   PlayGame('paper');
  })

  document.querySelector('.js-scissors-button').addEventListener('click', () => {
  PlayGame('scissors');
  })

  document.querySelector('.js-reset-button').addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  localStorage.removeItem('score');
  UpdateScore();
  })

  document.querySelector('.js-autoplay-button').addEventListener('click', () => {
  AutoPlay();
  })

};


function ComputerMove(){
  let number = Math.random();
  let result='';


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

function PlayGame(playerMove){

  const computermove=ComputerMove();
  let result='';

  if(playerMove==='rock'){

    if(computermove==='rock'){
      result='Draw';
    }
    else if(computermove==='paper'){
      result='You lose!';
    }
    else if(computermove==='scissors'){
      result='You win!';
    }
  }

  else if(playerMove==='paper'){

    if(computermove==='rock'){
      result='You win!';
    }
    else if(computermove==='paper'){
      result='Draw';
    }
    else if(computermove==='scissors'){
      result='You lose!';
    }
  }

  else if(playerMove==='scissors'){

    if(computermove==='rock'){
      result='You lose!';
    }
    else if(computermove==='paper'){
      result='You win!';
    }
    else if(computermove==='scissors'){
      result='Draw';
    }
  }

  if(result==='You win!'){
    score.wins++;
  }
  else if(result==='You lose!'){
    score.losses++;
  }
  else if(result==='Draw'){
    score.draws++;
  }

  document.querySelector('.js-result').innerHTML=`The result is: ${result}.`;
  document.querySelector('.js-moves').innerHTML=`Your move: <img src=Icons/${playerMove}-emoji.png class="fotke">, Computer's move: <img src=Icons/${computermove}-emoji.png class="fotke">`;
  UpdateScore();
  localStorage.setItem('score', JSON.stringify(score));
}

function UpdateScore(){

document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}.`;

}


var IsAutoPlayOn = false;
var intervalId;

function AutoPlay(){
  if(!IsAutoPlayOn){
    intervalId = setInterval(() => {
      const PlayerMove=ComputerMove();
      PlayGame(PlayerMove,ComputerMove());
    }, 1000)
    IsAutoPlayOn = true;
  }
  else{
    clearInterval(intervalId);
    IsAutoPlayOn = false;
  }
}