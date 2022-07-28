function QuizList({ setActive, quizes, setCurrentQuiz }) {
  const handleSelectedQuiz = (quiz) => {
    console.log(quiz);
    setActive('TakeQuiz');
    setCurrentQuiz(quiz);
  };

  return (
    <ul className='quizlist'>
      {quizes.map((quiz, index) => (
        <li
          key={index}
          className='quizlist-item'
          onClick={() => handleSelectedQuiz(quiz)}
        >
          <p>{quiz.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default QuizList;
