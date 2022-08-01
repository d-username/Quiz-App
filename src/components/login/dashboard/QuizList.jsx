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
          <p>Quiz number: {index + 1}</p>
          <p>Title: {quiz.title}</p>
          <p>Nr of questions: {quiz.questionsSet.length}</p>
        </li>
      ))}
    </ul>
  );
}

export default QuizList;
