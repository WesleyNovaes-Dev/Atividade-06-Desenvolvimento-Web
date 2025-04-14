// src/components/ToDoList.js
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Container, Box } from '@mui/material';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Digite uma tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button
          sx={{ marginTop: 2 }}
          variant="contained"
          onClick={addTask}
        >
          Adicionar
        </Button>
      </Box>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ToDoList;
