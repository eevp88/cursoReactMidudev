import { useState } from 'react'
import './App.css'

const TURNS = {
  'X': 'x',
  'O' : 'o'
}
const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


const Square = ({children , isSelected, updateBoard, index}) =>{
  const className =  `square ${isSelected ? 'is-selected' : '' }`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
function App() {
  const [board, setBoard] = useState( Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  const checkWinner = (boardToCheckd) => {
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheckd[a] &&
        boardToCheckd[a]===boardToCheckd[b] &&
        boardToCheckd[a]=== boardToCheckd[c]
      ){
        return boardToCheckd[a]
      }
    }
    return null
  }
  const restGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  const updateBoard =  (index) => {
    if (board[index] || winner ) return
    const  newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
    }
    // TODO: check if game  over

  }

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <section className='game'>
        {
          board.map((_, index) =>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'> 
        <Square isSelected ={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected ={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' :` Ganó ${winner}`
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}

              </header>
              <footer>
                <button onClick={restGame} > Empezar  de nuevo</button>
              </footer>

            </div>

          </section>
        )
      }
    </main>
  )
}

export default App