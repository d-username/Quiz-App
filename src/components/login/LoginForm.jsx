import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function LoginForm({ setLoggedInUser, loggedInUser }) {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let copyUserInput = userInput;
    copyUserInput[name] = value;
    setUserInput(copyUserInput);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('in handle login');
    fetch(`http://localhost:3500/api/user/${userInput.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
      });

      // console.log('userinput', userInput)
      // console.log('database info', loggedInUser);
    if (userInput.password === loggedInUser.password) {
      navigate('/create');
    } else {
      console.log('passwords dont match')
    }
  };

  return (
    <form className='login-form' onSubmit={(e) => handleLogin(e)}>
      <h1>Login</h1>
      <div className='login-input-div'>
        <span class='material-symbols-outlined'>mail</span>
        <input
          className='login-form-input'
          type='email'
          label='Email'
          variant='outlined'
          name='email'
          onChange={(e) => handleInputChange(e)}
          placeholder='email'
        ></input>
      </div>

      <div className='login-input-div'>
        <span class='material-symbols-outlined'>key</span>
        <input
          className='login-form-input'
          type='password'
          label='Password'
          variant='outlined'
          name='password'
          onChange={(e) => handleInputChange(e)}
          placeholder='password'
        ></input>
      </div>

      <button
        id='login-submit-button'
        className='button-reset greenButton'
        type='submit'
        variant='contained'
      >
        <span class='material-symbols-outlined'>login</span>
        Login
      </button>

      <div className='login-no-account'>
        Don't have an account yet?{' '}
        <span className='login-register-link'>
          <Link to='/register'>Register</Link>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
