let comps = 0;
let players = 0;
function play(player){
    
    comp = getChoice()
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
    if (compscore !== plscore){
        if (compscore >= 5 ){
            winText.textContent = `COMPUTER WINS. YOU LOST`;
            winText.style.display = 'block';
        }
        if (plscore >=5){
            winText.textContent = `YOU WIN. COMPUTER LOST`;
            winText.style.display = 'block';
        }
    }
    
        
}
