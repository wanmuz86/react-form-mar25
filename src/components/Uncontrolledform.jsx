import React,{useRef} from 'react'

const Uncontrolledform = () => {
    // Create a reference to the input elements
    // useRef is used a react Hook to create a reference to the input elements
    const nameRef = useRef(null)
    const colorRef = useRef(null)
    const checkBoxRef = useRef(null)

    const handleSubmit = (e) => {
        //Override the default browser form post submission
    e.preventDefault()
    console.log( `Input for name: ${nameRef.current.value}`)
    console.log( `Input for color: ${colorRef.current.value}`)
    console.log( `Input for checkbox: ${checkBoxRef.current.checked}`)
    }
  return (
    <div>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" ref={nameRef} required/>
            </div>
            <div>
                <p>Favourite color</p>
                <select name="color" id="color" ref={colorRef} required>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div>
                <label>Do you like React?</label>
                <input type="checkbox" ref={checkBoxRef} />
                <label htmlFor="likeReact">Yes</label>  
            </div>
            <button type='submit'>Send Data</button>
        </form>
    </div>
  )
}

export default Uncontrolledform