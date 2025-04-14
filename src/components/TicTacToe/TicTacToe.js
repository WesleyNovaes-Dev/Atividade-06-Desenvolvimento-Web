// src/components/TicTacToe.js
import React, { useState } from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import './TicTacToe.css'; // Arquivo CSS para estilização

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Verifica se há um vencedor
  const calculateWinner = (board) => {
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
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Lida com o clique em uma célula
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(calculateWinner(newBoard));
  };

  // Reinicia o jogo
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Jogo da Velha
      </Typography>

      {winner ? (
        <Typography variant="h6" color="success.main" gutterBottom>
          Vencedor: {winner}
        </Typography>
      ) : (
        <Typography variant="h6" gutterBottom>
          Próximo jogador: {isXNext ? 'X' : 'O'}
        </Typography>
      )}

      <Grid container spacing={1} sx={{ width: 210, marginTop: 2 }}>
        {board.map((value, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="outlined"
              className="tic-tac-toe-cell"
              onClick={() => handleClick(index)}
              sx={{
                width: 70,
                height: 70,
                fontSize: '1.5rem',
              }}
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="primary" sx={{ marginTop: 3 }} onClick={handleReset}>
        Reiniciar
      </Button>
    </Box>
  );
};

export default TicTacToe;
