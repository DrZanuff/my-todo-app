import { v4 } from 'uuid'
import { Todo } from '../types'

export const mockedTodos: Todo[] = [
  {
    id: v4(),
    title: 'Setup development environment',
    completed: true,
    user: {
      id: v4(),
      name: 'Jhon Doe',
    },
  },
  {
    id: v4(),
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: v4(),
    title: 'Deploy to live server',
    completed: false,
  },
]
