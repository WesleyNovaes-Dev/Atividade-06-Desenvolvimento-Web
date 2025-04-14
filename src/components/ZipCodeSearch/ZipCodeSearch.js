// src/components/ZipCodeSearch.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function ZipCodeSearch() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState([]);

  const searchAddress = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
    //setAddress(data.logradouro + " - " + data.bairro + " - " + data.localidade +"/" + data.uf|| 'Endereço não encontrado');
    setAddress(data);
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Buscador de CEP</Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button
          sx={{ marginTop: 2 }}
          variant="contained"
          onClick={searchAddress}
        >
          Buscar
        </Button>
      </Box>
      <Typography variant="p">Estado: {address.estado}</Typography>
      <br/>
      <Typography variant="p">Região: {address.regiao}</Typography>
      <br/>
      <Typography variant="p">Cidade: {address.localidade}</Typography>
      <br/>
      <Typography variant="p">Bairro: {address.bairro}</Typography>
      <br/>
      <Typography variant="p">Logradouro: {address.logradouro}</Typography>
  
 
      
    </Container>
  );
}

export default ZipCodeSearch;
