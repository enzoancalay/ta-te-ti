
let player ='X';
let board = [];
let gameState = 'Playing'
const squares = 
document.querySelectorAll(".squares");

const resetButton = document.getElementById ('resetButton');

resetButton.addEventListener ('click', ()=>
reset());



const result = document.getElementById ("result")

// {/* <i class="fa-solid fa-o"></i> */}
// {/* <i class="fa-solid fa-x"></i> */}

squares.forEach ((square, i) => 
    square.addEventListener('click' ,
    ()=>
    play(square, i)
   )
)

const play = (s, i) => {
    if (s.innerHTML === '' && gameState==="Playing") {
        s.innerHTML = player;
        board[i]= player;
        // winner combos
        // 0, 1, 2 x
        // 3, 4, 5 x
        // 6, 7, 8 x 
        // 0, 3, 6 x 
        // 1, 4, 7 x
        // 2, 5, 8 x 
        // 0, 4, 8 x 
        // 2, 4, 6
     if (board [0]=== board[1]&&
        board[1]===board[2]&&
        board [0] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
     }
     

     if (board [3]=== board[4]&&
        board[4]===board[5]&&
        board [3] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
        }
     
     if (board [6]=== board[7]&&
        board[7]===board[8]&&
        board [6] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
     }
     if (board [0]=== board[3]&&
        board[3]===board[6]&&
        board [0] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
     }
     if (board [1]=== board[4]&&
        board[4]===board[7]&&
        board [1] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
     }
     if (board [2]=== board[5]&&
        board[5]===board[8]&&
        board [2] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
     }
     if (board [0]=== board[4]&&
        board[4]===board[8]&&
        board [0] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
    }
     if (board [2]=== board[4]&&
        board[4]===board[6]&&
        board [2] ) {
         result.innerText= `El ganador es ${player}`
         gameState ='Winner'
    }
      let emptySquare =0;
      for (let i = 0; i < squares.length; i++) {
         const square = squares[i];
         if (square.innerText=== ``) {
            emptySquare++; 
         }
         
      }
if (emptySquare=== 0 &&
   gameState === `Playing`
   ) {
      gameState = `Tie`;
      result.innerText= `Hay un empate! `
   
}

 
   
   if (
      player ==='X'
  ){
      player='O';
  } else {
      player='X';
  }   
    
   }
  
  
 }




 const reset =() =>{
    squares.forEach (
        square =>(square.innerHTML = '') 
    )
    player= 'X';
    board = [];
    result.innerText ``;
    gameState = "Playing"
    
    };

