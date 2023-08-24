import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      <br/> 
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        {/* <label htmlFor="username">
          Username: */}
          <TextField
            size='small'
            type="text"
            label="Create username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        {/* </label> */}
      </div>
      <br/> <br/> 
      <div>
        {/* <label htmlFor="password">
          Password: */}
          <TextField
            size='small'
            type="password"
            label="Create password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        {/* </label> */}
      </div>
      <br/>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
