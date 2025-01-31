import { TodoContainer } from './components/TodoContainer'
import { RecoilRoot } from 'recoil'
import './App.css'

function App() {
  return (
    <RecoilRoot>
      <TodoContainer />
    </RecoilRoot>
  )
}

export default App
