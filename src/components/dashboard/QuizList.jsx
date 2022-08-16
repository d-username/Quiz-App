function QuizList({ setActive, quizes, setCurrentQuiz, deleteQuiz }) {
  const handleSelectedQuiz = (quiz) => {
    setActive('TakeQuiz');
    setCurrentQuiz(quiz);
  };

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
