import { useState } from 'react';
import LoginForm from './LoginForm';

function LoginPage({ loggedInUser, setloggedInUser }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });
    console.log(userInput);
  };

  const loginUser = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInput),
    };
    fetch('URL', requestOptions).then((response) => response.json());
    //this funcion will post to DB where auth. also happens then setloggedInUser.
  };

  return (
    <div>
      <LoginForm handleChange={handleChange} handleSubmit={loginUser} />
    </div>
  );
}

export default LoginPage;



