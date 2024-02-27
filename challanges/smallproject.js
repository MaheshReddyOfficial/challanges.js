'use strict';

/*
document.querySelector('.message').textContent='correct number';
  
document.querySelector('.score').textContent=35;

document.querySelector('.number').textContent=20;


document.querySelector('.guess').value=25;
*/
const seceretnumber= Math.trunc(Math.random()*20+1);

let score=20;


document.querySelector( '.check' ).addEventListener('click', function(){
    const guesses=Number( document.querySelector('.guess').value );

    // console.log(guesses);

    if(!guesses){
        document.querySelector('.message').textContent='⛔ No Number ';

    }else if (guesses===seceretnumber){
        document.querySelector('.message').textContent='🎉Correct Number';
        document.querySelector('.number').textContent=seceretnumber;
        document.querySelector('body').style.backgroundColor ='#60b347';

    }else if (guesses>seceretnumber){
        if(score > 0) {
             document.querySelector('.message').textContent="📈 Too High";
        score--;
        document.querySelector( '.score' ).textContent = score; 
        } else{
            document.querySelector('.message').textContent= " 💥You Lose!";
        }
        // document.querySelector('.message').textContent="📈 Too High";
        // score--;
        // document.querySelector( '.score' ).textContent = score; 
        
    } else if (guesses<seceretnumber) { 
        if(score > 0) {
            document.querySelector('.message').textContent="📉 Too low";
       score--;
       document.querySelector( '.score' ).textContent = score; 
       } else{
           document.querySelector('.message').textContent= " 💥You Lose!";
       }
        // document.querySelector('.message').textContent= "📉 Too Low ";
        // score--;
        // document.querySelector( '.score' ).textContent = score; 
    }
});