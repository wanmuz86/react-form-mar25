import { useState } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import Uncontrolledform from './components/Uncontrolledform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ControlledForm/>
    <hr />
    <Uncontrolledform/>
    </>
  )
}

export default App
