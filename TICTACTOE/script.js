const board = document.getElementById("main");
createGame();
function createGame (){
  for(let i = 0; i<=8;i++){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute("id",i)
    tile.addEventListener("click", () => {makeMove(i);});
    board.appendChild(tile);
  }
}

const Player = (type)=>{
  return(type)
}
let player = 'x'
let Board =[0,0,0,0,0,0,0,0,0]
function makeMove(i){
  const tile = document.getElementById(i);
  if (controlBoard(i)){
    tile.textContent = player
    Board[i]=player
    checkwinner()
    if (player ==='x'){
      player='O'
    } else{
      player='x'
    }
  }
}
function checkwinner(){
  if (Board[0] === Board[1] && Board[0] === Board[2]){
    console.log(Board[0] + ' wins')
  }

  
}
function controlBoard (index){
  if (Board[index]===0){
    return(true)
  }
}