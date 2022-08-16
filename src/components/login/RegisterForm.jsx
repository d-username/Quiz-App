import { Link } from 'react-router-dom';
import { useState } from 'react';

function RegisterForm() {
  const [isSuccessREGVisible, setIsSuccessREGVisible] = useState(false)
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let copyUserInput = userInput;
    copyUserInput[name] = value;
    setUserInput(copyUserInput);
    console.log(userInput);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput),
    };
    fetch('http://localhost:3500/api/user', requestOptions).then((response) =>
      response.json()
    );
    setUserInput({ name: '', email: '', password: '' });
    renderSuccessAlert();
  };

  const renderSuccessAlert = () => {
    setIsSuccessREGVisible(true);
    setTimeout(() => {
      setIsSuccessREGVisible(false);
    }, 3000);
  };

  return (
    <form className='login-form' onSubmit={(e) => handleRegister(e)}>
      <h1>Register</h1>

      {isSuccessREGVisible && (
        <div className='register-success-notification'>
          <span class='material-symbols-outlined'>check_circle</span>success
        </div>
      )}

      <div className='register-input-div'>
        <span class='material-symbols-outlined'>person</span>
        <input
          className='login-form-input'
          type='text'
          label='name'
          name='name'
          onChange={(e) => handleInputChange(e)}
          placeholder='name'
        ></input>
      </div>

      <div className='register-input-div'>
        <span class='material-symbols-outlined'>mail</span>
        <input
          className='login-form-input'
          type='email'
          label='Email'
          name='email'
          onChange={(e) => handleInputChange(e)}
          placeholder='email'
        ></input>
      </div>

      <div className='register-input-div'>
        <span class='material-symbols-outlined'>key</span>
        <input
          className='login-form-input'
          type='password'
          label='Password'
          name='password'
          onChange={(e) => handleInputChange(e)}
          placeholder='password'
        ></input>
      </div>

      <button
        id='register-submit-button'
        className='button-reset greenButton'
        type='submit'
      >
        <span class='material-symbols-outlined'>login</span>
        Register
      </button>

      <div className='login-no-account'>
        Do you already have an account?{' '}
        <span className='login-register-link'>
          <Link to='/login'>Login</Link>
        </span>
      </div>
    </form>
  );
}

export default RegisterForm;


