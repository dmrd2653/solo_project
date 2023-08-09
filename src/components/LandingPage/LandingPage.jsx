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
        <div className="grid-col">
          <LoginForm />
        </div>
        <div className="grid-col new-user">
            <h4>New User?</h4>
            <button className="btn btn_sizeSm" onClick={onRegister}>
              Register
            </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
