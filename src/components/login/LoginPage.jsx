import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginPage({ setLoggedInUser }) {
  const [userInput, setUserInput] = useState({name: '', email: '', password: ''});
  const [isRegister, setIsRegister] = useState('login');
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('http://localhost:3005/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        console.log(users);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let copyUserInput = userInput
    copyUserInput[name] = value
    setUserInput(copyUserInput);
    console.log(userInput)
  }

    const handleLogin = (e) => {
      e.preventDefault();

      console.log('trying to log in')
      
      for(let i=0; i<users.length; i++) {
        if (
          users[i].email === userInput.email &&
          users[i].password === userInput.password
        ) {
          setLoggedInUser(users[i]);
          console.log('matching')
        }
      }
    };

    const handleRegister = (e) => {
       e.preventDefault();
       console.log('registering')

       const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(userInput),
       };
       fetch('http://localhost:3005/users/', requestOptions)
         .then((response) => response.json())
         .then((data) => console.log('this is the response data', data));

       setUserInput({ name: '', email: '', password: '' });
    }

  return (
    <div className='login-page'>
      {isRegister === 'register' && (
        <RegisterForm
          handleInputChange={handleInputChange}
          handleRegister={handleRegister}
          setIsRegister={setIsRegister}
        />
      )}
      {isRegister === 'login' && (
        <LoginForm
          handleLogin={handleLogin}
          handleInputChange={handleInputChange}
          setIsRegister={setIsRegister}
        />
      )}
    </div>
  );
}

export default LoginPage;



