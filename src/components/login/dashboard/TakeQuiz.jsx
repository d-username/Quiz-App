import { useState } from 'react';

function TakeQuiz({ currentQuiz }) {
  const [answers, setAnswers] = useState(currentQuiz.questions);
  const [score, setScore] = useState(0)

  const handleCheckboxChange = (event, index, index2) => {
    event.preventDefault();
    const value = event.target.checked;
    //console.log(index, index2, value)
    let copyAnswers = answers
    //console.log(copyAnswers)
    let theParticularQuestion = copyAnswers[index]
    //console.log(theParticularQuestion);
    let theParticularAnswer = theParticularQuestion.answerList[index2]
    //console.log(theParticularAnswer);
    theParticularAnswer.givenAnswer = value
    //console.log(theParticularAnswer);

    setAnswers(copyAnswers);
    console.log(answers)
  };

  const resetFields = (e) => {
    e.preventDefault();
    console.log('resetting');
  };

  const SubmitAnswers = (e) => {
    e.preventDefault()
    console.log('submitting here')

    for (let q = 0; q < answers.length; q++) {
      let currentQuestion = answers[q];
      console.log('current question', currentQuestion);
      let currentQsAnswerList = currentQuestion.answerList;
      console.log('current questions anwerlist', currentQsAnswerList);

      currentQsAnswerList.forEach((answer) => {
        console.log(answer);
        if (answer.givenAnswer === true && answer.isThisCorrect === true) {
          console.log('you have chosen: ', answer.answer, 'and it is CORRECT');

          // let copyScore = score;
          // copyScore++;
          // setScore(copyScore);
          // console.log('score is: ', score);
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
  }

  return (
    <form className='takequiz'>
      <h1>Take Quiz</h1>
      <h2>{currentQuiz.title}</h2>

      <ul className='takequiz-question-list'>
        {currentQuiz.questions.map((question, index) => (
          <li key={index} className='takequiz-question-card'>
            <div className='takequiz-question'>{question.question}</div>

            <ul className='takequiz-answers-list'>
              {question.answerList.map((answer, index2) => (
                <li key={index2} className='takequiz-answer-card'>
                  <input
                    type='checkbox'
                    // value= --- i will need this for resetFields()
                    onChange={(e) => handleCheckboxChange(e, index, index2)}
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
