import { ChangeEvent, FormEvent, useState } from 'react'
import type { InputTodoProps } from './InputTodo.types'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './InputTodo.css'

export const InputTodo = ({ handleAddTodoItem }: InputTodoProps) => {
  const [title, setTitle] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleAddTodoItem(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <TextField
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        variant="outlined"
        onChange={onChange}
        sx={{ flex: 2 }}
        size="small"
      />
      <Button
        variant="contained"
        type="submit"
        className="input-submit"
        value="Submit"
        size="small"
        sx={{ flex: 1 }}>
        Submit
      </Button>
    </form>
  )
}
