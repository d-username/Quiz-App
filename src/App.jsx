import CreateQuestionsForm from './components/dashboard/CreateQuestionForm';
import TakeQuiz from './components/dashboard/TakeQuiz';
import QuizList from './components/dashboard/QuizList';
import Stats from './components/dashboard/Stats';
import Home from './components/dashboard/Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';

export default function App() {
  const [currentQuiz, setCurrentQuiz] = useState();
  const [score, setScore] = useState({ goodAnswers: 0 });

  return (
    <div className='dashboard'>
      <main className='main'>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/' element={<Home />} />
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
        </Routes>
      </main>

      <aside className='aside'>
        <ul>
          <li>
            <span class='material-symbols-outlined'>person</span>
            {/* <div>user: {loggedInUser.name}</div> */}
          </li>

          <li>
            <Link to='/'>Home</Link>;
          </li>

          <li>
            <span class='material-symbols-outlined'>edit</span>
            <Link to='/create'>Create Quiz</Link>;
          </li>

          <li>
            <span class='material-symbols-outlined'>list</span>
            <Link to='/quizlist'>Quiz List</Link>;
          </li>

          <li>
            <span class='material-symbols-outlined'>bar_chart</span>
            <Link to='/stats'>Info</Link>;
          </li>

          <li>
            <span class='material-symbols-outlined'>logout</span>
            <Link to='/login'>Logout</Link>;
          </li>
        </ul>
      </aside>
    </div>
  );
}
