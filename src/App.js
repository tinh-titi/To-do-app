import { TextField, Typography, styled, Alert } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from './component/CustomButton';
import './App.css';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'

})

function App(props) {
  const [input, setInput] = useState()
  const [data, setData] = useState([])

  function handleOnChange(event) {
    setInput(event.target.value)
  }

  function handleOnClick() {
    setData(data.concat([{ title: input, complete: false}]))
  }

  function mapData(todo) {
    return <Alert severity="error">{todo.title}</Alert>
  }
  return (
    <div>
      <Typography align='center' variant='h3'>TO DO LIST</Typography>
      <Wrapper>
        <TextField onChange={handleOnChange} variant='outlined' />
        <CustomButton onClick={handleOnClick}>Add</CustomButton>
      </Wrapper>
      <div>
        {data.map(mapData)}
      </div>
    </div>
  )
}
export default App