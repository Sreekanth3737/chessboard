import { useState } from "react";
import "./App.css";

function App({ boardSize = 8 }) {
  const [hoverSquare, setHoverSquare] = useState(null);

  const initializeBoard = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(""));

  const handleMouseEnter = (row, col) => {
    setHoverSquare([row, col]);
  };

  const handleMouseLeave = () => {
    setHoverSquare(null);
  };

  const getSquareColor = (row, col) => {
    if (!hoverSquare) return "";

    const [hoverRow, hoverCol] = hoverSquare;

    if (row === hoverRow && col === hoverCol) return "lightblue";

    if (Math.abs(hoverRow - row) === Math.abs(hoverCol - col))
      return "darkblue";

    return "";
  };

  return (
    <div className="chessboard">
      {initializeBoard.map((row, rowIndex) => {
        return row.map((_, colIndex) => {
          const isDarkSquare = (rowIndex + colIndex) % 2 === 1;
          return (
            <div
              key={`${colIndex}-${rowIndex}`}
              className={`square ${isDarkSquare ? "dark" : "light"}`}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: getSquareColor(rowIndex, colIndex) }}
            ></div>
          );
        });
      })}
    </div>
  );
}

export default App;
