import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerForm = (boardToCheckd) => {
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

export const checkEndGame = (newBoard) =>{
  return  newBoard.every((square)=>{square !== null})
}