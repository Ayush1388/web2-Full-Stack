
import './App.css'
import { Button } from './components/Buttons'
import {Input} from './components/Input'

function App() {
  return (
   <div className='bg-blue-500 h-screen '>
   <Button disabled={false}>Sign up </Button>
   <Input type ="text" placeholder = {"Username"}></Input>
  </div>
  )
}

export default App
