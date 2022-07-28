function TakeQuiz({ currentQuiz }) {
  return (
    <div className='takequiz'>
      <h1>Take Quiz</h1>
      <h2>{currentQuiz.title}</h2>

      <ul className='takequiz-question-list'>
        {currentQuiz.questions.map((question, index) => (
          <li key={index} className='takequiz-question-card'>
            <div className='takequiz-question'>{question.question}</div>

            <ul className='takequiz-answers-list'>
              {question.answerList.map((answer, index) => (
                <li key={index} className='takequiz-answer-card'>
                  <div className='takequiz-answer'>{answer.answer}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TakeQuiz