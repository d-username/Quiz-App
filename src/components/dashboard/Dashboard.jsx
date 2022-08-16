import CreateQuestionsForm from "./CreateQuestionForm";
import TakeQuiz from "./TakeQuiz";
import QuizList from "./QuizList";
import Stats from "./Stats";
import Home from "./Home"
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

export default function Dashboard({ setLoggedInUser, loggedInUser }) {
  const [currentQuiz, setCurrentQuiz] = useState();
  const [score, setScore] = useState({ goodAnswers: 0 });

  return (
    <div className='dashboard'>
      <main className='main'>
        <Routes>
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
            <div>user: {loggedInUser.name}</div>
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
            <span class='material-symbols-outlined'>logout</span>Logout
          </li>
        </ul>
      </aside>
    </div>
  );
}
