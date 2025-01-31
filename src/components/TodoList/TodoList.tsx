import { TodoItem } from '../TodoItem'
import { TodoListProps } from './TodoList.types'
import './TodoList.css'

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="todo-list-items">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
