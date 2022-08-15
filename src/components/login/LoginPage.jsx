import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginPage({ setLoggedInUser }) {
  const [userInput, setUserInput] = useState({name: '', email: '', password: ''});
  const [isRegister, setIsRegister] = useState(false);
  const [users, setUsers] = useState()
  const [isSuccessREGVisible, setIsSuccessREGVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3005/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let copyUserInput = userInput
    copyUserInput[name] = value
    setUserInput(copyUserInput);
  }

    const handleLogin = (e) => {
      e.preventDefault();
      
      for(let i=0; i<users.length; i++) {
        if (
          users[i].email === userInput.email &&
          users[i].password === userInput.password
        ) {
          setLoggedInUser(users[i]);
        }
      }
    };

    const handleRegister = (e) => {
       e.preventDefault();

       const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(userInput),
       };
       fetch('http://localhost:3005/users/', requestOptions)
         .then((response) => response.json())

       setUserInput({ name: '', email: '', password: '' });

       renderSuccessAlert()
    }

    const renderSuccessAlert = () => {
      setIsSuccessREGVisible(true);

      setTimeout(() => {
        setIsSuccessREGVisible(false);
      }, 3000);
    };

  return (
    <div className='login-page'>
      {isRegister ? (
        <RegisterForm
          handleInputChange={handleInputChange}
          handleRegister={handleRegister}
          setIsRegister={setIsRegister}
          isSuccessREGVisible={isSuccessREGVisible}
          renderSuccessAlert={renderSuccessAlert}
        />
      ) : (
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



