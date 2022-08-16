import { useEffect, useState } from 'react';

function QuizList({ setActive, setCurrentQuiz, deleteQuiz }) {
  const [quizes, setQuizes] = useState([]);
  const handleSelectedQuiz = (quiz) => {
    setActive('TakeQuiz');
    setCurrentQuiz(quiz);
  };

  useEffect(() => {
    fetch('http://localhost:3500/api/quiz')
      .then((res) => res.json())
      .then((data) => {
        setQuizes(data.quizes);
      });
  }, []);

  const deleteQuizFromList = (id) => {
    fetch(`http://localhost:3500/api/quiz/${id}`, {
      method: 'DELETE',
    }).then(() => {
      deleteQuiz(id);
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

          <button
            className='button-reset greenButton'
            onClick={() => handleSelectedQuiz(quiz)}
          >
            Take Quiz
          </button>
          <span
            className='material-symbols-rounded'
            onClick={() => deleteQuizFromList(quiz.id)}
          >
            delete
          </span>
        </li>
      ))}
    </ul>
  );
}

export default QuizList;
