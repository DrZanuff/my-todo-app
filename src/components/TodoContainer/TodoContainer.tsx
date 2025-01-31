import { ChangeEvent, useState } from 'react'
import { TodoList } from '../TodoList'
import { Header } from '../Header'
import { InputTodo } from '../InputTodo'
import { v4 } from 'uuid'
import { useCallback } from 'react'
import { todoAtom, todoUser, userListOpen } from '../../atoms/todoAtoms'
import { useRecoilState } from 'recoil'
import type { Todo, TodoUser } from '../../types'
import { Button, Paper, TextField, List, Stack } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { UserBadge } from '../UserBadge'
import { AddUserDrawer } from '../AddUserDrawer'

export function TodoContainer() {
  const [todos, setTodos] = useRecoilState(todoAtom)
  const [todoUsers, setTodoUsers] = useRecoilState(todoUser)
  const [newUserName, setNewUserName] = useState('')
  const [isOpen, setIsOpen] = useRecoilState(userListOpen)

  const addTodoItem = useCallback((title: string) => {
    const newTodo: Todo = {
      id: v4(),
      title,
      completed: false,
    }

    setTodos((prev) => [...prev, newTodo])
  }, [])

  const handleAddTodoItem = (title: string) => {
    addTodoItem(title)
  }

  const handleChangeNewUserName = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewUserName(e.target.value)
  }

  const handleCloseUserList = () => {
    setIsOpen(false)
  }

  const handleAddNewUser = () => {
    const newUser: TodoUser = {
      id: v4(),
      name: newUserName,
    }
    setTodoUsers((prev) => [...prev, newUser])
    setNewUserName('')
  }

  return (
    <>
      <Paper
        elevation={2}
        sx={{ padding: '20px', maxWidth: '500px', width: '100%' }}>
        <div className="container">
          <Header />
          <InputTodo handleAddTodoItem={handleAddTodoItem} />
          <TodoList todos={todos} />
        </div>
      </Paper>

      <Dialog open={isOpen} onClose={handleCloseUserList}>
        <DialogTitle>Users</DialogTitle>
        <Stack sx={{ padding: '20px', gap: '10px' }}>
          <TextField
            variant="outlined"
            size="small"
            value={newUserName}
            onChange={(e) => handleChangeNewUserName(e)}
          />
          <Button
            variant="contained"
            size="small"
            disabled={newUserName.length === 0}
            onClick={handleAddNewUser}>
            Add new user
          </Button>
          <List>
            {todoUsers.map((user, index) => (
              <UserBadge
                user={user}
                key={user.id}
                isLast={index < todoUsers.length - 1}
              />
            ))}
          </List>
        </Stack>
      </Dialog>
      <AddUserDrawer />
    </>
  )
}
