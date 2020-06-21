import React from 'react';
import {useForm} from 'react-hook-form'

function Form() {

  const { handleSubmit, register, errors} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text" placeholder="name" name="name" ref={register} />
      <input type="password" placeholder="password" name="password" ref={register} />
      <input type="submit" />
      
    </form>
  );
}

export default Form;
