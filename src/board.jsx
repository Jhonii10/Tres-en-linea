import React,{useState} from 'react'
import Square from './botones'


export default function board() {
 
    // eslint-disable-next-line no-undef, react-hooks/rules-of-hooks
    const [square, setSquare] = useState(Array(9).fill(null));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xIsNext, setXisNext] = useState(true);

    

    function handleClick(i) {

        if (square[i] || calculeWinner(square)) {
            return;
        }
       
        const nextSquare = square.slice();
        nextSquare[i] = xIsNext? 'X' : 'O';
        setSquare(nextSquare)
        setXisNext(!xIsNext)
        
    }

    const winner = calculeWinner(square);
    let status;

    if (winner) {
        status = <h1>Gano el jugador: {winner}</h1>
    } else {
        // status = 'Jugador: '+ (xIsNext? 'X' : 'O');
        status = <h2>Jugador: {xIsNext ? 'X':'O'}</h2>
    }

    



  return (
    <>
    <div className="status" >{status}</div>

        <div className="board-row">
            <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
            
        </div>
        <div className="board-row">
            <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
      
    </>
  )
}

function calculeWinner(square) {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
        
    }
    return null;
    
}
