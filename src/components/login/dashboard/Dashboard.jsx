import CreateQuestionsForm from "./CreateQuestionForm";
import TakeQuiz from "./TakeQuiz";
import QuizList from "./QuizList";
import ResultBoard from "./ResultBoard";
import Stats from "./Stats";
import { useEffect, useState } from 'react';

export default function Dashboard({ setLoggedInUser, loggedInUser }) {
  const [active, setActive] = useState('CreateQuestionsForm');
  const [quizes, setQuizes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState();
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ goodAnswers: 0 });
  const [statsData, setStatsData] = useState();

  useEffect(() => {
    fetch('http://localhost:3005/questionSets')
      .then((res) => res.json())
      .then((data) => {
        setQuizes(data);
      });
  }, [active]);

    useEffect(() => {
      fetch('http://localhost:3005/stats')
        .then((res) => res.json())
        .then((data) => {
          console.log('stats data', data)
          setStatsData(data)
        });
    }, [active]);

  return (
    <div className='dashboard'>
      <main className='main'>
        {active === 'CreateQuestionsForm' && <CreateQuestionsForm />}
        {active === 'QuizList' && (
          <QuizList
            setActive={setActive}
            quizes={quizes}
            setCurrentQuiz={setCurrentQuiz}
          />
        )}
        {active === 'TakeQuiz' && (
          <TakeQuiz
            currentQuiz={currentQuiz}
            setShowResults={setShowResults}
            score={score}
            setScore={setScore}
          />
        )}
        {active === 'Stats' && <Stats statsData={statsData} />}
        {showResults === true && (
          <ResultBoard
            score={score}
            currentQuiz={currentQuiz}
            setShowResults={setShowResults}
            setScore={setScore}
          />
        )}
      </main>
      <aside className='aside'>
        <div>
          <span class='material-symbols-outlined'>person</span>user:{' '}
          {loggedInUser.name}
        </div>
        <div onClick={() => setActive('CreateQuestionsForm')}>
          <span class='material-symbols-outlined'>edit</span>Create Quiz
        </div>
        <div onClick={() => setActive('QuizList')}>
          <span class='material-symbols-outlined'>list</span>Quiz List
        </div>
        <div onClick={() => setActive('Stats')}>
          <span class='material-symbols-outlined'>bar_chart</span>Info
        </div>
        <div onClick={() => setLoggedInUser('')}>
          <span class='material-symbols-outlined'>logout</span>Logout
        </div>
      </aside>
    </div>
  );
}

