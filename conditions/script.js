
const random = Math.floor(Math.random()* 10 )+1;
let tries=0;
const maxTries = 3;

function guessNumber(){

  const input = parseInt(document.getElementById("guess-input").value);
  const message = document.getElementById("message");


    if (tries < maxTries){
         tries++;
                                                                        

    if(input===random){
      message.textContent="Congrats! You guessed it";
      return;
    }

    else if(input < random){
      message.textContent="Too low";
      
    }

    else{
      message.textContent="Too High";
    }
  }

  if (tries===maxTries){
  message.textContent="No Tries Left, You Lost!"
  return;
  }
}
