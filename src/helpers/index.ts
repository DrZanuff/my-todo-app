import { Todo, TodoUser } from '../types'

export function updateTodo(todos: Todo[], id: string) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      }
    }

    return todo
  })
}

export function updateAssignedUserTodo(
  todos: Todo[],
  id: string,
  user: TodoUser
) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        user,
      }
    }

    return todo
  })
}

export function removeTodo(todos: Todo[], id: string) {
  return todos.filter((todo) => todo.id !== id)
}
