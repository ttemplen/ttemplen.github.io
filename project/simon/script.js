

let order=[];
let playerOrder=[];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;
let turnCounter= document.querySelector('#turn');
let topLeft= document.querySelector('#topLeft');
let topRight= document.querySelector('#topRight')
let strictButton= document.querySelector('#strict');
let onButton= document.querySelector('#on');
let startButton= document.querySelector('#start');


strictButton.addEventListener('change',(event)=>{
 if(strictButton.checked== true){
     strict = true;
 } else{
     strict = false;
 }
});

onButton.addEventListener('click',(event)=>{
    if(onButton.checked == true){
        on = true;
        turnCounter.innerHTML="on";
    } else {
        on = false;
        turnCounter.innerHTML= "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click',(event)=>{
    if(on ||win){
        play();
    }
});

function play(){
    
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for(let i=0;i<20;i++){
        order.push(Math.floor(Math.random()*4)+1);
    }
    compTurn=true;
    intervalId = setInterval(gameTurn, 800);
}
function gameTurn(){
    on=false;
    if(flash == turn ){
        clearInterval(intervalId);
        compTurn=false;
        clearColor();
        on=true;
    }

    if (compTurn){
        clearColor();
        setTimeout(()=>{
            if(order[flash]==1) {
                one()
            } ;
            if(order[flash]==2) {
                two();
            }    
            if(order[flash]==3) {
                three();
            }    
            if(order[flash]==4) {
                four();
            }    
            flash++;
        },400)
    }
}

function one(){
    if(noise) {
        let audio = document.querySelector('#clip1');
        audio.play();        
    }
    noise = true;
    topLeft.style.backgroundColor="lightgreen";
}

function two(){
    if(noise) {
        let audio = document.querySelector('#clip2');
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor="tomato";
}
function three(){
    if(noise) {
        let audio = document.querySelector('#clip3');
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor="yellow";
}
function four(){
    if(noise) {
        let audio = document.querySelector('#clip4');
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor="lightskyblue";
}

function clearColor(){
    topLeft.style.backgroundColor="rgb(2, 99, 2)";
    topRight.style.backgroundColor="rgb(140, 6, 6)";
    bottomLeft.style.backgroundColor="rgb(206, 158, 36)";
    bottomRight.style.backgroundColor="rgb(5, 5, 138)";
}

function flashColor(){
    topLeft.style.backgroundColor="lightgreen";
    topRight.style.backgroundColor="tomato";
    bottomLeft.style.backgroundColor="yellow";
    bottomRight.style.backgroundColor="lightskyblue";
}

topLeft.addEventListener('click', (event)=>{
    if(on){
        playerOrder.push(1);
        check();
        one();
        if(win){
            setTimeout(()=>{
            clearColor();
        }, 500);
      }else{
        setTimeout(()=>{
            clearColor();
        }, 500);
      }
    }
})
topRight.addEventListener('click', (event)=>{
    if(on){
        playerOrder.push(2);
        check();
        two();
        if(win){
            setTimeout(()=>{
            clearColor();
        }, 500);
      }else{
        setTimeout(()=>{
            clearColor();
        }, 500);
      }
    }
})
bottomLeft.addEventListener('click', (event)=>{
    if(on){
        playerOrder.push(3);
        check();
        three();
        if(win){
            setTimeout(()=>{
            clearColor();
        }, 500);
      } else{
        setTimeout(()=>{
            clearColor();
        }, 500);
      }
    }
})
bottomRight.addEventListener('click', (event)=>{
    if(on){
        playerOrder.push(4);
        check();
        four();
        if(win){
            setTimeout(()=>{
            clearColor();
        }, 500);
      } else{
        setTimeout(()=>{
            clearColor();
        }, 500);
      }
    }
})

function check(){
 if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1]) 
 good = false;
 if(playerOrder.length== 20 && good){
     winGame();
 }
 if (good==false){
     flashColor();
     turnCounter.innerHTML="Wrong!";
     setTimeout(()=>{
         turnCounter.innerHTML= turn;
         clearColor();

         if(strict){
             play();
         } else{
             compTurn=true;
             flash=0;
             playerOrder=[];
             good= true;
             intervalId = setInterval(gameTurn,800);
         }
     },800)
     noise = false;
 }
 if (turn== playerOrder.length && good && !win){
     turn++;
     playerOrder =[];
     compTurn = true;
     flash = 0;
     turnCounter.innerHTML= turn;
     intervalId = setInterval(gameTurn,800);
 }
}

function winGame(){
    flashColor();
    turnCounter.innerHTML="Win!";
    on= false;

}

///console.log('hello')