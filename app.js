let gameSeq = [];
let userSeq = [];
let btns = ['yellow', 'red', 'purple', 'green'];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");


document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('game started');
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 100);

}

function userflash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove('userFlash')
    }, 100);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;
    //choose random button
    let randInd = Math.floor(Math.random() * 3);
    // console.log(randInd);
    let randColor = btns[randInd];
    let randbtn = document.querySelector(`.${randColor}`);

    //adding in array gameSeq
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);

}
function checkAns(idx) {
    //console.log(`current level is:${level}`);
    // let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            console.log('settimeout');
            setTimeout(levelUp(), 1000);
        }
        // console.log("Same value ");
    }
    else {
        h2.innerHTML = `Game over! Your score was ${level} <br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'white'

        },250

        )
        reset ();
    }
}
function btnPress() {
    // console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    // console.log(userColor);
    checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener('click', btnPress);
}

function reset(){
    userSeq =[];
    gameSeq=[];
    started= false;
    level = 0; 

}