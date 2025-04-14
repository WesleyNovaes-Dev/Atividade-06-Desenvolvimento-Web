// src/components/ClickCounter.js
import React, { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Contador de Cliques</Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Clique!
      </Button>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Cliques: {count}
      </Typography>
    </Container>
  );
}

export default ClickCounter;
