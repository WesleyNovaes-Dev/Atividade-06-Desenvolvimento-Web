// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';
import ClickCounter from './components/ClickCounter/ClickCounter';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Calculator from './components/Calculator/Calculator';
import ZipCodeSearch from './components/ZipCodeSearch/ZipCodeSearch';
import { Container, Box } from '@mui/material';

function App() {
  const [component, setComponent] = useState('ToDoList'); // Componente inicial

  const renderComponent = () => {
    switch (component) {
      case 'ToDoList':
        return <ToDoList />;
      case 'ClickCounter':
        return <ClickCounter />;
      case 'TicTacToe':
        return <TicTacToe />;
      case 'Calculator':
        return <Calculator />;
      case 'ZipCodeSearch':
        return <ZipCodeSearch />;
      default:
        return <ToDoList />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Cabeçalho */}
      <Header setComponent={setComponent} />
      
      {/* Área de conteúdo */}
      <Container sx={{ flexGrow: 1, paddingTop: 4 }}>
        {renderComponent()}
      </Container>
    </Box>
  );
}

export default App;
