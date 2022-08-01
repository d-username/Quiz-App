import { useState } from 'react';

function TakeQuiz({ currentQuiz, setShowResults, score, setScore }) {
  const [answers, setAnswers] = useState(currentQuiz.questionsSet);


  const handleRadioChange = (event, index, index2) => {
    event.preventDefault();

    let answersCopy = answers;
    let theParticularQuestion = answersCopy[index];
    let theParticularAnswerList = [...theParticularQuestion.answerList];

    theParticularAnswerList.forEach((answer) => {
      delete answer.givenAnswer;
    });

    let theAnswerToChange = theParticularAnswerList[index2];
    theAnswerToChange.givenAnswer = true;

    setAnswers(answersCopy);
  };

  const resetFields = (e) => {
    e.preventDefault();
    console.log('resetting');
  };

  const SubmitAnswers = (e) => {
    e.preventDefault();
    console.log('submitting here');
    console.log('answers are here: ',answers);

    let copyAnswers = answers;

    for (let q = 0; q < copyAnswers.length; q++) {
      let currentQuestion = copyAnswers[q];
      let currentQsAnswerList = currentQuestion.answerList;

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
        {currentQuiz.questionsSet.map((question, index) => (
          <li key={index} className='takequiz-question-card'>
            <div className='takequiz-question'>{question.question}</div>

            <ul className='takequiz-answers-list'>
              {question.answerList.map((answer, index2) => (
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
    </form>
  );
}

export default TakeQuiz;
