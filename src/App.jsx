import { useState } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import Uncontrolledform from './components/Uncontrolledform'
import ReactHookForm from './components/ReactHookForm'

function App() {


  return (
    <>
    <ControlledForm/>
    <hr />
    <Uncontrolledform/>
    <hr />
    <ReactHookForm/>
    </>
  )
}

export default App
