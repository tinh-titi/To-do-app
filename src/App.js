import { TextField, Typography, styled, Alert, } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from './component/CustomButton';
import DeleteIcon from './icon/DeleteIcon';
import { ThemeProvider } from '@mui/material';
import { pinkTheme, lightTheme } from './config/theme'

const AppWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.customColor,
  color: theme.palette.Text,
  height: '100vh',
}))

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

const CustomAlert = styled(Alert)(({ theme }) => ({
  color: theme.palette.Text,
  marginBlock: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  "& .MuiAlert-message": {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1
  }

}))


function App(props) {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])
  const [isPinkTheme, setIsPinkTheme] = useState(true)

  function handleOnChange(event) {
    setInput(event.target.value)
  }

  function handleOnClick() {
    setData(data.concat([{ title: input, complete: false }]))
    setInput("")
  }

  // function handleToDoOnClick(index) {
  //   console.log(index)
  // }

  const handleToDoOnClick = (index) => {
    const newData = [...data]
    newData[index] = { title: newData[index].title, complete: !newData[index].complete }
    setData(newData)
  }

  const handleDeleteOnClick = (event, index) => {
    const newData = [...data]
    newData.splice(index, 1)
    event.stopPropagation()
    setData(newData)
  }

  const handleChangeThemeOnClick = (event) => {
    setIsPinkTheme(!isPinkTheme) //state ? true : false
    console.log(event)
  }

  function mapData(todo, index) {
    const severity = todo.complete ? "success" : "error"
    return (
      <CustomAlert onClick={() => handleToDoOnClick(index)} severity={severity} key={Math.random() * 1000}>
        {todo.title}
        <DeleteIcon style={{ width: "20px" }} onClick={(event) => handleDeleteOnClick(event, index)} cursor='pointer' />
      </CustomAlert>
    )
  }

  return (
    <ThemeProvider theme={isPinkTheme ? pinkTheme : lightTheme}>
      <AppWrapper>
        <Typography align='center' variant='h3'>TO DO LIST</Typography>
        <Wrapper>
          <TextField onChange={handleOnChange} variant='outlined' value={input} />
          <CustomButton onClick={handleOnClick}>Add</CustomButton>
        </Wrapper>
        <CustomButton onClick={handleChangeThemeOnClick}>Change Theme</CustomButton>
        <div>
          {data.map(mapData)}
        </div>
      </AppWrapper>
    </ThemeProvider>
  )
}
export default App