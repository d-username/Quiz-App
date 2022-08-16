import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ user: 'David' });

  return (
    <div className='App'>
      {!loggedInUser ? (
        <LoginPage setLoggedInUser={setLoggedInUser} />
      ) : (
        <Dashboard
          setLoggedInUser={setLoggedInUser}
          loggedInUser={loggedInUser}
        />
      )}
    </div>
  );
}

export default App;
