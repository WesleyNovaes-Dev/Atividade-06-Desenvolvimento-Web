// src/components/Calculator.js
import React, { useState } from 'react';
import { Button, TextField, Container, Grid } from '@mui/material';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Erro');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <Container sx={{ padding: 2 }}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        inputProps={{ readOnly: true }}
      />
      <Grid container spacing={1}>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('1')}>1</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('2')}>2</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('3')}>3</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('+')}>+</Button></Grid>

        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('4')}>4</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('5')}>5</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('6')}>6</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('-')}>-</Button></Grid>

        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('7')}>7</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('8')}>8</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('9')}>9</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('*')}>*</Button></Grid>

        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('0')}>0</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={handleClear}>C</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={handleResult}>=</Button></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={() => handleClick('/')}>/</Button></Grid>
      </Grid>
    </Container>
  );
}

export default Calculator;
