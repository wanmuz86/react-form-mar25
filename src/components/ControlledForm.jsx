import React, { useState } from 'react'

const ControlledForm = () => {
const [name,setName] = useState('')
const [gender,setGender] = useState('male')
  return (
    <div>
        <h2>Controller Form</h2>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' 
        value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="gender">Gende</label>
            <select name="gender" id="gender" value={gender}
            onChange={(e)=> setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="notstate">Prefer not to state</option>
            </select>
            <p>User has selected {gender}</p>
        </div>
    </div>
  )
}

export default ControlledForm