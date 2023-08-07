import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  const history = useHistory();

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-col grid-col_5">
          <LoginForm />
          <center>
            <h4>New User?</h4>
            <button className="btn btn_sizeSm" onClick={onRegister}>
              Register
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
