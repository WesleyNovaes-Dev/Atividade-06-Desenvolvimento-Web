// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function Header({ setComponent }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Aplicações React
        </Typography>
        <Button color="inherit" onClick={() => setComponent('ToDoList')}>To-Do List</Button>
        <Button color="inherit" onClick={() => setComponent('ClickCounter')}>Contador de Cliques</Button>
        <Button color="inherit" onClick={() => setComponent('TicTacToe')}>Jogo da Velha</Button>
        <Button color="inherit" onClick={() => setComponent('Calculator')}>Calculadora</Button>
        <Button color="inherit" onClick={() => setComponent('ZipCodeSearch')}>Buscador de CEP</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
