import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  userDrawerListOpen,
  todoUser,
  currentTodoAtom,
  todoAtom,
} from '../../atoms/todoAtoms'
import { updateAssignedUserTodo } from '../../helpers'
import { UserBadge } from '../UserBadge'
import { TodoUser } from '../../types'

export function AddUserDrawer() {
  const [isOpen, setIsOpen] = useRecoilState(userDrawerListOpen)
  const [todos, setTodos] = useRecoilState(todoAtom)
  const users = useRecoilValue(todoUser)
  const currentTodo = useRecoilValue(currentTodoAtom)

  const handleCloseDrawer = () => () => {
    setIsOpen(false)
  }

  const handleAssignUser = (todoId: string, todoUser: TodoUser) => {
    console.log('DBG:', { todoId, todoUser, currentTodo })

    if (!currentTodo) {
      return
    }

    setTodos(updateAssignedUserTodo(todos, todoId, todoUser))

    setIsOpen(false)
  }

  return (
    <Drawer open={isOpen} onClose={handleCloseDrawer()}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {users.map((user, index) => (
            <ListItem key={user.id} disablePadding>
              <ListItemButton
                onClick={() => handleAssignUser(currentTodo.id, user)}>
                <UserBadge user={user} isLast={index < users.length - 1} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
