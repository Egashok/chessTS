import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';


function App() {

  const [board,setBoard]=useState<Board>(new Board())
  const [whitePlayer,setWhitePlayer]=useState<Player>(new Player(Colors.WHITE))
  const [blackPlayer,setBlackPlayer]=useState<Player>(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }


  function restart(){
    const newBoard=new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)  
    setCurrentPlayer(whitePlayer)
  }

  useEffect(()=>{
    restart()
  },[])
  return (
    <div className="App">
      <div className="sidebar">

      <button onClick={restart}>Рестарт</button>
      <p>
      {currentPlayer?.color}
        </p>
      </div>
      <BoardComponent currentPlayer={currentPlayer} swapPlayer={swapPlayer} board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
