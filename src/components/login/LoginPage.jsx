import { useState } from 'react';
import LoginForm from './LoginForm';

function LoginPage({ setLoggedInUser }) {
  const [userInput, setUserInput] = useState({email: '', password: ''});

  const myloginDetails = {email: 'czdavid93@gmail.com', password: '11111'}

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let copyUserInput = userInput
    copyUserInput[name] = value
    setUserInput(copyUserInput);

    console.log(userInput)
  }

    const handleLogin = (e) => {
      e.preventDefault();
      console.log('userinput',userInput)
      console.log('mylogindetails', myloginDetails);

      if (userInput.email === myloginDetails.email && userInput.password === myloginDetails.password) {
        setLoggedInUser('David')
        console.log('matching')
      }
    };

  return (
    <div>
      <LoginForm
        handleLogin={handleLogin}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default LoginPage;



