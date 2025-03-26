import React, { useState } from 'react'

const ControlledForm = () => {
const [name,setName] = useState('')
  return (
    <div>
        <h2>Controller Form</h2>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' 
        value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
    </div>
  )
}

export default ControlledForm