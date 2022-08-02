function QuizList({ setActive, quizes, setCurrentQuiz }) {
  const handleSelectedQuiz = (quiz) => {
    console.log(quiz);
    setActive('TakeQuiz');
    setCurrentQuiz(quiz);
  };

  return (
    <ul className='quizlist'>
      <h1>Quiz List</h1>
      {quizes.map((quiz, index) => (
        <li
          key={index}
          className='quizlist-item'
          // onClick={() => handleSelectedQuiz(quiz)}
        >
          <div>
            <p>Title: {quiz.title}</p>
            {/* <p>Quiz number: {index + 1}</p> */}

            <p>Nr of questions: {quiz.questionsSet.length}</p>
          </div>

          <button
            className='button-reset greenButton'
            onClick={() => handleSelectedQuiz(quiz)}
          >
            Take Quiz
          </button>
        </li>
      ))}
    </ul>
  );
}

export default QuizList;
