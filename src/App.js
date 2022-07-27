import LoginPage from './components/login/LoginPage';
import Dashboard from './components/login/dashboard/Dashboard';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('David');

  return (
    <div className='App'>
      {!loggedInUser ? (
        <LoginPage
          setLoggedInUser={setLoggedInUser}
          loggedInUser={loggedInUser}
        />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
