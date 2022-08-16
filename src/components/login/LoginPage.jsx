import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Route, Routes } from 'react-router';

function LoginPage({ setLoggedInUser }) {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [users, setUsers] = useState();
  const [isSuccessREGVisible, setIsSuccessREGVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3005/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let copyUserInput = userInput;
    copyUserInput[name] = value;
    setUserInput(copyUserInput);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
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
    fetch('http://localhost:3005/users/', requestOptions).then((response) =>
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
}

export default LoginPage;



