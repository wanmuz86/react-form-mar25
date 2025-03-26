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

const [phone, setPhone] = useState('')
const [phoneError,setPhoneError] = useState('')

const [formError,setFormError] = useState({name:null, email:null, message:null})

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

const handlePhoneChange = (e) => {
const value = e.target.value
setPhone(value)
if (value.length <10){
    setPhoneError("Phone number should be 10 digits")
}
else {
    setPhoneError('')
}
}

const handleClick = () => {
    // Regex for email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const error  = {name:null, email:null, message:null}
    let hasError = false

    if (formData.name === '' || formData.name.length < 3){
        error.name = 'Name is required and needs to be more than 3'
        hasError = true
    }
    if (formData.email === '' || !emailRegex.test(formData.email)){
        error.email = 'Email is required and should be in the correct format'
        hasError = true
    }
    if (formData.message === '' || formData.message.length < 10){
        error.message = 'Message is required and should be more than 10 characters'
        hasError = true
    }
    setFormError(error)

    if (!hasError){
        console.log("All OK can call API")
    }

}
  return (
    <div>
        <h2>Controller Form</h2>
     
       
    
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' 
        value={formData.name} onChange={handleChange}/>
         {
            formError.name && <p style={{color:'red'}}>{formError.name}</p>
         }
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' value={formData.email} onChange={handleChange} />
            {
                formError.email && <p style={{color:'red'}}>{formError.email}</p>
            }
        </div>
        <div>
            <label htmlFor='phone'>Phone:</label>
            <input type="phone" name="phone" id="phone" value={phone} onChange={handlePhoneChange}/>   
            {
                phoneError && <p style={{color:'red'}}>{phoneError}</p>
            }
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
            {
                formError.message && <p style={{color:'red'}}>{formError.message}</p>   
            }
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
            <button onClick={handleClick}>Show Data</button>
        </div>
    </div>
  )
}

export default ControlledForm