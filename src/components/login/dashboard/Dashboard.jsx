import CreateQuestionsForm from "./CreateQuestionForm";
import TakeQuiz from "./TakeQuiz";
import QuizList from "./QuizList";
import ResultBoard from "./ResultBoard";
import { useEffect, useState } from 'react';

export default function Dashboard({setLoggedInUser}) {
  const [active, setActive] = useState('CreateQuestionsForm');
  const [quizes, setQuizes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState()
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState({ goodAnswers: 0 });

  useEffect(() => {
    fetch('http://localhost:3005/questionSets')
      .then((res) => res.json())
      .then((data) => {
        setQuizes(data);
        console.log('quizes', quizes);
      });
  }, []);

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
        <div onClick={() => setActive('CreateQuestionsForm')}>
          <span class='material-symbols-outlined'>edit</span>Create Quiz
        </div>
        <div onClick={() => setActive('QuizList')}>
          <span class='material-symbols-outlined'>list</span>Quiz List
        </div>
        <div onClick={() => setLoggedInUser('')}>
          <span class='material-symbols-outlined'>logout</span>Logout
        </div>
      </aside>
    </div>
  );
}

