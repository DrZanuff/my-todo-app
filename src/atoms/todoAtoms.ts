import { atom } from 'recoil'
import { Todo, TodoUser } from '../types'
import { mockedTodos } from '../mock/todos'

export const todoAtom = atom<Todo[]>({
  default: mockedTodos,
  key: 'todoAtom',
})

export const todoUser = atom<TodoUser[]>({
  default: [],
  key: 'todoUser',
})

export const userListOpen = atom({
  key: 'userListOpen',
  default: false,
})

export const userDrawerListOpen = atom({
  key: 'userDrawerListOpen',
  default: false,
})

export const currentTodoAtom = atom<Todo>({
  key: 'currentTodo',
  default: {} as Todo,
})
