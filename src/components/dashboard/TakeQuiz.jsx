import { useState } from 'react';
import ResultBoard from './ResultBoard';

function TakeQuiz({ currentQuiz, score, setScore }) {
  const [answers, setAnswers] = useState(currentQuiz.questions);
  const [showResults, setShowResults] = useState(false);

  const handleRadioChange = (event, index, index2) => {
    event.preventDefault();

    let answersCopy = answers;
    let theParticularQuestion = answersCopy[index];
    let theParticularAnswerList = [...theParticularQuestion.answers];

    theParticularAnswerList.forEach((answer) => {
      delete answer.givenAnswer;
    });

    let theAnswerToChange = theParticularAnswerList[index2];
    theAnswerToChange.givenAnswer = true;

    setAnswers(answersCopy);
  };

  const resetFields = (e) => {
    e.preventDefault();
  };

  const SubmitAnswers = (e) => {
    e.preventDefault();

    for (let q = 0; q < answers.length; q++) {
      let currentQuestion = answers[q];
      let currentQsAnswerList = currentQuestion.answers;

      currentQsAnswerList.forEach((answer) => {
        if (answer.givenAnswer === true && answer.isThisCorrect === true) {
          console.log('you have chosen: ', answer.answer, 'and it is CORRECT');

          let scoreCopy = score;
          scoreCopy.goodAnswers += 1;
          setScore(scoreCopy);

        }
        if (answer.givenAnswer === true && answer.isThisCorrect === false) {
          console.log(
            'you have chosen: ',
            answer.answer,
            'but it is INCORRECT'
          );
        }
      });
    }
    setShowResults(true)
  };



  return (
    <form className='takequiz'>
      <h1>Take Quiz</h1>
      <h2>{currentQuiz.title}</h2>
      <ul className='takequiz-question-list'>
        {currentQuiz.questions.map((question, index) => (
          <li key={index} className='takequiz-question-card'>
            <div className='takequiz-question'>{question.question}</div>

            <ul className='takequiz-answers-list'>
              {question.answers.map((answer, index2) => (
                <li key={index2} className='takequiz-answer-card'>
                  <input
                    type='radio'
                    name={index}
                    value={index2}
                    onChange={(e) => handleRadioChange(e, index, index2)}
                  />
                  <div className='takequiz-answer'>{answer.answer}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className='spaceAround'>
        <button
          className='button-reset'
          id='clear-button'
          onClick={(e) => resetFields(e)}
        >
          <span className='material-symbols-outlined'>device_reset</span>
          clear all fields
        </button>

        <button
          id='question-submit-button'
          type='submit'
          className='button-reset greenButton'
          onClick={(e) => SubmitAnswers(e)}
        >
          <span className='material-symbols-outlined'>done</span>
          submit
        </button>
      </div>

      
  {showResults === true && (
      <ResultBoard
        score={score}
        currentQuiz={currentQuiz}
        setShowResults={setShowResults}
        setScore={setScore}
      />)}

    </form>
  );
}

export default TakeQuiz;
