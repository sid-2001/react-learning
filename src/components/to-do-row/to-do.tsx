import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState } from 'react';
import {useForm,submitHandler} from 'react-hook-forms'
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import TextField from '@mui/material/TextField/TextField';
-
import {register,handlSubmit,watch,setValue} fro


interface FormDataField {
  task: string;
  startTime: string;
  endTime: string;
}

export default function ToDoComponent() {
  const [data, setData] = useState<FormDataField[]>([]);

  const sub_handler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const formData: FormDataField = {
      task: (e.target as HTMLFormElement)['task'].value,
      startTime: (e.target as HTMLFormElement)['start-time'].value,
      endTime: (e.target as HTMLFormElement)['end-time'].value,
    };
  
    setData((prevData) => [...prevData, formData]);
  
    // Clear the form fields after submission
    // e.currentTarget.reset();
  };
  
  return (
    <>
      <h1>To Do Application</h1>
      <form onSubmit={sub_handler}>
        <Button variant="contained" type="submit">
          Add Task
        </Button>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="task" label="Task" variant="outlined" name="task" />
          <TextField
            id="start-time"
            label="Start Time"
            variant="outlined"
            name="start-time"
          />
          <TextField
            id="end-time"
            label="End Time"
            variant="outlined"
            name="end-time"
          />
        </Box>
      </form>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: FormDataField, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.task}
                </TableCell>
                <TableCell align="right">{row.startTime}</TableCell>
                <TableCell align="right">{row.endTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
