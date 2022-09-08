
let player ='X';


const squares = 
document.querySelectorAll(".squares");

const resetButton = document.getElementById ('resetButton');
resetButton.addEventListener ('click', ()=>
reset());

let board = [];


// {/* <i class="fa-solid fa-o"></i> */}
// {/* <i class="fa-solid fa-x"></i> */}

squares.forEach ((square, i) => 
    square.addEventListener('click' ,
    ()=>
    play(square, i)
   )
)

const play = (s, i) => {
    if (s.innerHTML === '') {
        s.innerHTML = player;
        board[i]=player;
        console.log(board)
        // winner combos
        // 0, 1, 2 
        // 3, 4, 5
        // 6, 7, 8
        // 0, 3, 6
        // 1, 4, 7
        // 2, 5, 8
        // 0, 4, 8
        // 2, 4, 6


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
    };

