import React, { useState } from 'react';
import { CustomButtom } from '../custom-buttom/custom-buttom.component';

import { FormInput } from '../form-input/form-input.component';
import './sign-in.styles.scss';

export const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  console.log(formState);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log('submitted');
    setFormState({ email: '', password: '' });
  };

  const handleChange = (e: any) => {
    const { value, name } = e?.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='email'
          value={formState.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='password'
          value={formState.password}
          handleChange={handleChange}
          required
        />
        <CustomButtom type='submit'>Sign In</CustomButtom>
      </form>
    </div>
  );
};
