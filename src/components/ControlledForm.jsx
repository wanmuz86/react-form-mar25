import React, { useState } from 'react'

const ControlledForm = () => {
const [name,setName] = useState('')
const [gender,setGender] = useState('male')
const [colors, setColors] = useState([{
    name:"Blue", isChecked:false,
},
{
    name:"Red", isChecked:false,
},
{
    name:"Green", isChecked:false,
},
{
    name:"Yellow", isChecked:false,
}

])

const handleColorChanged = (val) => {
    val.isChecked = !val.isChecked // Change the property of the object
    setColors([...colors]) // Update the state  with the new object
}
  return (
    <div>
        <h2>Controller Form</h2>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' 
        value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
        {/* e refers to the event object,
 e.target refers to the element that triggered the event [input]
 e.target.checked refers to the checked property of the input element / e.target.value refers to the value of the input element */}

            <label htmlFor="gender">Gende</label>
            <select name="gender" id="gender" value={gender}
            onChange={(e)=> setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="notstate">Prefer not to state</option>
            </select>
            <p>User has selected {gender}</p>
        </div>
        <div>
            <p>Please select the colors</p>
            {
                colors.map(val=>
                    <li key={val.name}>
                        <input type="checkbox" name={val.name} checked={val.isChecked} 
                        onChange={()=>handleColorChanged(val)}/>
                        <label>{val.name}</label>
                    </li>
                    )
            }
            <p>
                Selected colors are: {
                // Filter the colors array to get the checked colors and join them with a comma
                    colors.filter(val => val.isChecked === true).map(val => val.name).join(',')
                }
            </p>
        </div>
    </div>
  )
}

export default ControlledForm