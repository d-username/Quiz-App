import CreateQuestionsForm from './components/dashboard/CreateQuestionForm';
import TakeQuiz from './components/dashboard/TakeQuiz';
import QuizList from './components/dashboard/QuizList';
import Stats from './components/dashboard/Stats';
import Home from './components/dashboard/Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link, Navigate} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';

export default function App() {
  const [currentQuiz, setCurrentQuiz] = useState();
  const [score, setScore] = useState({ goodAnswers: 0 });
  const [loggedInUser, setLoggedInUser] = useState({user: 'David'});

  const handleLogout = (e) => {
    e.preventDefault()
    setLoggedInUser(null)
  }

  return (
    <div className='dashboard'>
      <main className='main'>
        <Routes>
          <Route
            path='/login'
            element={
              <LoginForm
                setLoggedInUser={setLoggedInUser}
                loggedInUser={loggedInUser}
              />
            }
          />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<CreateQuestionsForm />} />
          <Route
            path='/quizlist'
            element={<QuizList setCurrentQuiz={setCurrentQuiz} />}
          />
          <Route
            path='/takequiz/:id'
            element={
              <TakeQuiz
                currentQuiz={currentQuiz}
                score={score}
                setScore={setScore}
              />
            }
          />

          <Route path='/stats' element={<Stats />} />
          <Route
            path='*'
            element={
              <div>
                <h2>Sorry - 404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </main>

      {loggedInUser && (
        <aside className='aside'>
          <ul className='aside-ul'>
            <li>
              <span class='material-symbols-outlined'>person</span>
              user: {loggedInUser.name}
            </li>

            <li>
              <span class='material-symbols-outlined'>home</span>
              <Link to='/home'>Home</Link>
            </li>

            <li>
              <span class='material-symbols-outlined'>edit</span>
              <Link to='/create'>Create Quiz</Link>
            </li>

            <li>
              <span class='material-symbols-outlined'>list</span>
              <Link to='/quizlist'>Quiz List</Link>
            </li>

            <li>
              <span class='material-symbols-outlined'>bar_chart</span>
              <Link to='/stats'>Info</Link>
            </li>

            <li onClick={(e) => handleLogout(e)}>
              <span class='material-symbols-outlined'>logout</span>
              <Link to='/login'>Logout</Link>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
}
