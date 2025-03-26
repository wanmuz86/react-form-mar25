import React, { useState } from 'react'

const ControlledForm = () => {
// const [name,setName] = useState('')
// const [gender,setGender] = useState('male')

// Create an object that holds the form data
const [formData, setFormData] = useState({
    name:'',
    email:'',
    gender:'',
    message:''
})

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

const handleChange = (e) => {

    // Object destructuring
    // name = e.target.name // name, email, message, gender
    // value = e.target.value // aa,aaa@gmail.com,aa,female
    const {name, value} = e.target;
    // Object Spread operator
    // Update the state with the new value
  // [] is used to evaluate the variable name name, email , message  instead "name"
    setFormData((prevFormData)=> ({...prevFormData, [name]:value}))

}
  return (
    <div>
        <h2>Controller Form</h2>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' 
        value={formData.name} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div>
        {
        /* e refers to the event object,
 e.target refers to the element that triggered the event [input]
 e.target.checked refers to the checked property of the input element / e.target.value refers to the value of the input element */}

            <label htmlFor="gender">Gende</label>
            <select name="gender" id="gender" value={formData.gender}
            onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="notstate">Prefer not to state</option>
            </select>
            <p>User has selected {formData.gender}</p>
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
            <button onClick={()=>console.log(formData)}>Show Data</button>
        </div>
    </div>
  )
}

export default ControlledForm