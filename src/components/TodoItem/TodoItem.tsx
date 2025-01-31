import { TodoItemProps } from './TodoItem.types'
import {
  todoAtom,
  userDrawerListOpen,
  currentTodoAtom,
} from '../../atoms/todoAtoms'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { updateTodo, removeTodo } from '../../helpers'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import { UserBadge } from '../UserBadge'
import './TodoItem.css'

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [todos, setTodo] = useRecoilState(todoAtom)
  const setUserListOpen = useSetRecoilState(userDrawerListOpen)
  const setCurrentTodo = useSetRecoilState(currentTodoAtom)

  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  removeTodo
  const { id, title, completed, user } = todo

  const handleUpdateTodo = (id: string) => {
    setTodo(updateTodo(todos, id))
  }

  const handleDeleteTodo = (id: string) => {
    setTodo(removeTodo(todos, id))
  }

  const handleAssignUser = () => {
    setCurrentTodo(todo)
    setUserListOpen(true)
  }

  return (
    <Paper
      elevation={1}
      sx={{
        width: '100%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'start',
        boxSizing: 'border-box',
      }}>
      <li className="todo-item-container">
        <Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
          <Checkbox
            checked={completed}
            onChange={() => handleUpdateTodo(id)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleDeleteTodo(id)}>
            <DeleteIcon />
            Delete
          </Button>
          <span style={completed ? completedStyle : {}}>{title}</span>
        </Stack>
        {user ? (
          <UserBadge user={user} isLast={true} />
        ) : (
          <Button onClick={() => handleAssignUser()}>Assign...</Button>
        )}
      </li>
    </Paper>
  )
}
