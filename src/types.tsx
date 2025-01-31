export type Todo = {
  id: string
  title: string
  completed: boolean
  user?: TodoUser
}

export type TodoUser = {
  id: string
  name: string
}
