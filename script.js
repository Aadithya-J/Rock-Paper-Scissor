let comps = 0;
let players = 0;
function play(player){
    comp = getChoice()
    changechoice(player,comp)
    if (player == comp){
        console.log('Tie')
        comps++;
        players++
        console.log('score')
        console.log(comps)
        console.log(players)
    }
    else if ((player =='rock' && comp == 'paper') || 
    (player == 'scissor' && comp == 'rock') || 
    (player == 'paper' && comp == 'scissor')){
        console.log('comp wins')
        comps++
        console.log('score')
        console.log(comps)
        console.log(players)
    }
    else {
        console.log('player wins')
        players++
        console.log('score')
        console.log(comps)
        console.log(players)
    }
    updateScore(comps,players)
}

const btn = document.querySelectorAll('.play');
for(let i = 0 ;i<btn.length;i++){
    btn[i].onclick = function() {
        play(this.id);
    }
}
function getRandom(){
    return Math.random();
}
function getChoice(){
    choice = getRandom()
    if (choice <= 1/3){
        return 'rock'
    }
    else if (choice <= 2/3){
        return 'paper'
    }
    else {
        return 'scissor'
    }
}
function updateScore(c,p){
    const comp = document.querySelector('.compscore')
    const player = document.querySelector('.plscore')
    comp.textContent = `COMPUTER : ${c}`;
    player.textContent = `PLAYER : ${p}`;
    win(c,p)
}
function win(compscore,plscore){
    const winText = document.querySelector('.win-text');
    const reset = document.querySelector('.reset-btn');
    if (compscore !== plscore){
        if (compscore >= 5 ){
            winText.textContent = `COMPUTER WINS. YOU LOST`;
            winText.style.display = 'block';
            reset.style.display = 'block';
            disableBtn()
            

        }
        if (plscore >=5){
            winText.textContent = `YOU WIN. COMPUTER LOST`;
            winText.style.display = 'block';
            reset.style.display = 'block';
            disableBtn()
        }
    }

    
        
}
function changechoice(player,comp){
    const compimg = document.querySelector('.comp-img');
    const playerimg = document.querySelector('.player-img');
    if (player == 'rock'){
        playerimg.src = 'button/rock2.jpg';
    }
    else if (player == 'paper'){
        playerimg.src = 'button/paper.jpg';
    }
    else {
        playerimg.src = 'button/scissor.jpg';
    }
    if (comp == 'rock'){
        compimg.src = 'button/rock2.jpg';
    }
    else if (comp == 'paper'){
        compimg.src = 'button/paper.jpg';
    }
    else {
        compimg.src = 'button/scissor.jpg';
    }
}
function reset(){
    comps = 0;
    players = 0;
    updateScore(comps,players);
    const winText = document.querySelector('.win-text');
    winText.style.display = 'none';
    const btn = document.querySelectorAll('.play');
    for(let i = 0 ;i<btn.length;i++){
        btn[i].disabled = false;
    }
    const compimg = document.querySelector('.comp-img');
    const playerimg = document.querySelector('.player-img');
    compimg.src = 'button/question.jpg';
    playerimg.src = 'button/question.jpg';
}
const resetBtn = document.querySelector('.reset-btn');
resetBtn.onclick = function(){
    reset();
    resetBtn.style.display = 'none';
}

function disableBtn(){
    const btn = document.querySelectorAll('.play');
    for(let i = 0 ;i<btn.length;i++){
        btn[i].disabled = true;
    }
}

