function QuizList({ setActive, quizes, setCurrentQuiz, deleteQuiz }) {
  const handleSelectedQuiz = (quiz) => {
    console.log(quiz);
    setActive('TakeQuiz');
    setCurrentQuiz(quiz);
  };

  const deleteQuizFromList = (id) => {
    console.log('delete quiz with index:', id);

    fetch(`http://localhost:3005/questionSets/${id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('deleting is successful???');
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
            <p>Number of questions: {quiz.questionsSet.length}</p>
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
