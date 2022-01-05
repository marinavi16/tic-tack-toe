
function createplayer(name){
    return{
    name: name,
    game: 0,
    step:0,
    win:0,
    form:0
    }
}
let players = [];
players.push(
    createplayer('Maya'),
    createplayer('Noya') 
)
let steps = [];
function createStep(){
    return{
        a:'a',
        b:'b',
        c:'c',
        d:'d',
        e:'e',
        f:'f',
        g:'g',
        h:'h',
        i:'i'
        }
    
}
function validCell(i){
    if (current_board[i]!='x' && current_board[i]!='o' && !win(current_board)){
        return true;
    }
    else {
        return false;
    }
}
function deleteStep(){
    document.getElementById(cells[step-1]).innerText='';
    current_board[cells[step-1]]=cells[step-1];
    cells.splice(step-1);
    return step--;
    
}
let cells = [];
function saveCells(y){
    cells.push(y);
}
function clearCells(){
    cells.splice(0);    
}
function topGame(){
    let maxi=0; //index of games with max steps
    let tt=9; //steps number
    for (let i=0;i<games.length;i++){
        if (games[i]['steps']<tt){
            tt=games[i]['steps'];
            maxi=i;  
        }
        else{   
        }
        console.log('the top is', maxi);
    }
    message(`The top game is game number ${games[maxi].num}
             with ${games[maxi].steps} steps
             and the winner was ${games[maxi].winner}`);
}
function createGame(num,steps,winner=''){
    return{
        num:num,
        steps:steps,
        winner:winner,
    }
}
let games = [];
let current_board = {
    a:'a',
    b:'b',
    c:'c',
    d:'d',
    e:'e',
    f:'f',
    g:'g',
    h:'h',
    i:'i'
}
let boards =[];
function saveBoard(board){
    boards.push(board);
}

function win(cb){
    if ((cb.a==cb.b && cb.b==cb.c) || (cb.d==cb.e && cb.e==cb.f) || (cb.g==cb.h && cb.h==cb.i) || (cb.a==cb.d && cb.d==cb.g) || (cb.b==cb.e && cb.e==cb.h) || (cb.c==cb.f && cb.f==cb.i) || (cb.a==cb.e && cb.e==cb.i) || (cb.c==cb.e && cb.e==cb.g)){
        return true;
    }
    else {
        return false;
    }
}
function clear(){
    document.querySelector('#a').innerText='';
    document.querySelector('#b').innerText='';
    document.querySelector('#c').innerText='';
    document.querySelector('#d').innerText='';
    document.querySelector('#e').innerText='';
    document.querySelector('#f').innerText='';
    document.querySelector('#g').innerText='';
    document.querySelector('#h').innerText='';
    document.querySelector('#i').innerText='';
}
function loadGame(a){
    step=0;
    if (myO.a == String(a)){
        document.getElementById('a').innerText='';
        }
    else{
        document.getElementById('a').innerText=myO.a;
        step++;
    }
}
function uploadGame(){
    step=0;
    if (myO['a']=='a'){
    document.getElementById('a').innerText='';
    }
    else{
        document.getElementById('a').innerText=myO['a'];
        step++;
    }
    current_board.a=myO.a;
    if (myO['b']=='b'){
        document.getElementById('b').innerText='';
        }
    else{
        document.getElementById('b').innerText=myO['b'];
        step++;
    }
    current_board.b=myO.b;
    if (myO['c']=='c'){
        document.getElementById('c').innerText='';
    }
        
    else{
        document.getElementById('c').innerText=myO['c'];
        step++;
    }
    current_board.c=myO.c;
    if (myO['d']=='d'){
        document.getElementById('d').innerText='';
    }
    else{
        document.getElementById('d').innerText=myO['d'];
        step++;
    }
        current_board.d=myO.d;
    if (myO['e']=='e'){
        document.getElementById('e').innerText='';
    }
    else{
        document.getElementById('e').innerText=myO['e'];
        step++;
    }
    current_board.e=myO.e;
    if (myO['f']=='f'){
        document.getElementById('f').innerText='';
    }
    else{
        document.getElementById('f').innerText=myO['f'];
        step++;
    }
    current_board.f=myO.f;
    if (myO['g']=='g'){
        document.getElementById('g').innerText='';
    }
    else{
        document.getElementById('g').innerText=myO['g'];
        step++;
    }
    current_board.g=myO.g;
    if (myO['h']=='h'){
        document.getElementById('h').innerText='';
    }
    else{
        document.getElementById('h').innerText=myO['h'];
        step++;
    }
    current_board.h=myO.h;
    if (myO['i']=='i'){
        document.getElementById('i').innerText='';
    }
    else{
        document.getElementById('i').innerText=myO['i'];
        step++;
    }
    current_board.i=myO.i;
}
function clearBoard(cb){
        cb.a='a',
        cb.b='b',
        cb.c='c',
        cb.d='d',
        cb.e='e',
        cb.f='f',
        cb.g='g',
        cb.h='h',
        cb.i='i'
}
function end(){
    clear();
    clearBoard(current_board);
    step=0; 
    clearCells();
    message('START PLAYING');    
}
function message(m){
    document.getElementById('mess').innerText=m;
}
let step = 0;
let n = 0;
let w = '';
message('START PLAYING');


document.querySelector('#board').addEventListener("click", function(e) {
    message('');
    if (validCell(e.target.id)){
    if (step==0 || (step % 2 == 0)){
            e.target.innerText='x';
            current_board[e.target.id]='x';
            saveCells(e.target.id);
            saveBoard(current_board);
            step++;
            if (win(current_board)){
                message('X-PLAYER WON');  
                n++;
                games.push(createGame(n,step,'x'));  
            }
            else if (step==9){
                message('GAME OVER');
                n++;
                games.push(createGame(n,step));
            }
    }
    else if (step==1 || (step % 2 != 0)){
        e.target.innerText='o';
        current_board[e.target.id]='o';
        saveCells(e.target.id);
        saveBoard(current_board);
        step++;
        if (win(current_board)){
            message('O-PLAYER WON');
            n++;
            games.push(createGame(n,step,'O'));
        }
        else if (step==9){
            message('GAME OVER');
            n++;
            games.push(createGame(n,step));
        }

    } 
    }
});
document.querySelector('#r').addEventListener("click", function() {
    end();
});

document.querySelector('#t').addEventListener("click", function() {
    console.log('TOP');
    topGame();
});
let myJ = '';
document.querySelector('#s').addEventListener("click", function() {
    message('SAVIG GAME');
    myJ = JSON.stringify(current_board);
    message('Your game saved');
    clear();
    clearBoard(current_board);
    step=0; 
    
    return myJ;
});

let myO = {};
document.querySelector('#l').addEventListener("click", function() {
    message('UPLOADING GAME');
    myO = JSON.parse(myJ);
    uploadGame();
    return myO;
});






    




    