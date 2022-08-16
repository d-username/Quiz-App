import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function QuizList({ setCurrentQuiz}) {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3500/api/quiz')
      .then((res) => res.json())
      .then((data) => {
        setQuizes(data.quizes);
      });
  }, []);

  const deleteQuiz = (id) => {
    fetch(`http://localhost:3500/api/quiz/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('deleted this', data)
        fetch('http://localhost:3500/api/quiz')
          .then((res) => res.json())
          .then((data) => {
            setQuizes(data.quizes);
          });
      });
  };

  return (
    <ul className='quizlist'>
      <h1>Quiz List</h1>
      {quizes.map((quiz, index) => (
        <li key={index} className='quizlist-item'>
          <div>
            <p>Title: {quiz.title}</p>
            <p>Number of questions: {quiz.questions.length}</p>
          </div>

          <button className='button-reset greenButton'>
            <Link
              to={`/takeQuiz/${quiz.id}`}
              onClick={() => setCurrentQuiz(quiz)}
            >
              Take Quiz
            </Link>
          </button>

          <span
            className='material-symbols-rounded'
            onClick={() => deleteQuiz(quiz.id)}
          >
            delete
          </span>
        </li>
      ))}
    </ul>
  );
}

export default QuizList;
