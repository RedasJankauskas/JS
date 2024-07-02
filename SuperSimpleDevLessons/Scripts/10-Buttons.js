function turnOnOrOff(button){
  let buttonState=document.querySelector(`.${button}`);
  if(!buttonState.classList.contains('is-Online')){
    checkOtherButtons(button);
    buttonState.classList.remove('buttonClassOff');
    buttonState.classList.add('is-Online');
  
  }
  else{
    buttonState.classList.remove('is-Online');
    buttonState.classList.add('buttonClassOff');
  }
}
function checkOtherButtons(){
  let buttonState=document.querySelector('.is-Online');
  if (buttonState){
    buttonState.classList.remove('is-Online');
    buttonState.classList.add('buttonClassOff')
  }
  
}