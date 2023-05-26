import React from 'react'
import {useForm} from 'react-hook-form'

function Form() {


    let {register,handleSubmit}=useForm({
        defaultValues:{
            username:'rajesh',
            email:'',
            address:{
                city:'chennai',
                street:''
            }
        }
    })
    function onSubmit(obj){
        console.log(obj)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('username')}  />
            <input type="email" {...register('email')}  />
            <input type="text" {...register('address.city')}  />
            <input type="text" {...register('address.street')}  />
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Form