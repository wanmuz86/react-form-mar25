import React,{useEffect, useState} from 'react'
import  { useForm }  from  "react-hook-form";


const ReactHookForm = () => {
    // 1 -> Register a form , 2 -> Handle the form submission, 3 -> Display the form errors
    // Add watch to the useForm hook to watch a form fields
    const {register,watch, handleSubmit, formState:{errors}} = useForm()
    const [warning,setWarning] = useState('')


    const onSubmit = (data) => {
        console.log(data)
    }


    const watchMessage = watch('message')

    useEffect(() => {

        const subscription = watch((data) => {
       
            if (data.message?.toLowerCase().includes('hack') || data.message?.toLowerCase().includes('profanity')
            || data.message?.toLowerCase().includes('porn')){
                setWarning('Profanity word detected')
        }
    }
        )
        return () => subscription.unsubscribe();
    
    },[watchMessage])

    // useEffect(() => {
    //     const subscription = watch((value, { name }) => {
    //         if (name === 'message') {
    //             console.log(value);
    //         }
    //     });
    
    //     return () => subscription.unsubscribe();
    // }, [watch]);

  return (
    <div>
        <h2>Example with React Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="name">
                Name
            </label>
            <input type="name" {...register("name",{required:true, minLength:3})} placeholder='Name'/>
            {errors.name && <p style={{color:'red'}}>Name is required and needs to be less than 3</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+\.\S+$/i})} />
                {errors.email && <p style={{color:'red'}}>Email is required and should be in the correct format</p>}
            </div>

            <div>
                <label htmlFor="gender">Gender</label>
                <select {...register("gender", { required: true })}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefernottostate">prefernottostate</option>
                    </select>
            {errors.gender && <p style={{color:'red'}}>Gender is required</p>}
          
            </div>
            <div>
            <label htmlFor="message">Message</label>
            <textarea {...register("message", {required: true})} />
            {warning && <p style={{color:'red'}}>{warning}</p>}
            {errors.message && <p style={{color:'red'}}>Message is required</p>}
            </div>
            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReactHookForm