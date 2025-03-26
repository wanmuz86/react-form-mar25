import React from 'react'
import  { useForm }  from  "react-hook-form";


const ReactHookForm = () => {
    // 1 -> Register a form , 2 -> Handle the form submission, 3 -> Display the form errors
    const {register, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div>
        <h2>Exmaple with React Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="name">
                Name
            </label>
            <input type="name" {...register("name",{required:true, minLength:3})} />
            {errors.name && <p style={{color:'red'}}>Name is required and needs to be less than 3</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReactHookForm