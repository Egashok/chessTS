import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import { FC } from "react";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
    swapPlayer: () => void;
    currentPlayer:Player | null;

}

    const BoardComponent: FC<BoardProps> = ({ board, setBoard,swapPlayer,currentPlayer }) => {
    
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    function click(cell: Cell) {

        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            swapPlayer()

        }
        else {
            if (cell.figure?.color === currentPlayer?.color) {
              setSelectedCell(cell);
            }
          }

    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>

            )}
        </div>
    );
}

export default BoardComponent;
