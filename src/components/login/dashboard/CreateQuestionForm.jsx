import { useState } from 'react';

function CreateQuestionsForm() {
  const [questionList, setQuestionList] = useState([
    {
      question: '',
      answerList: [{ answer: '', isThisCorrect: false }],
    }
  ]);

  const handleSubmit = () => {};

  const resetFields = (event) => {
    console.log('resetting')
    event.preventDefault()

    setQuestionList([{
      question: '',
      answerList: [{ answer: '', isThisCorrect: false }],
    }]);
  }

  const handleAnswerChange = (e, index, index2) => {
        e.preventDefault()
        const { name, value } = e.target;
        
        let copyQuestionList = [...questionList];
        let questionAtIndex = copyQuestionList[index];
        let theAnswers = questionAtIndex.answerList;

        theAnswers[index2][name] = value
        setQuestionList(copyQuestionList)
  };

    const removeAnswer = (event, index, index2) => {
        event.preventDefault()
    
        let copyQuestionList = [...questionList]
        let questionAtIndex = copyQuestionList[index];
        let theAnswers = questionAtIndex.answerList;

        theAnswers.splice(index2, 1);
        setQuestionList(copyQuestionList);
    };

    const addQuestion = (event) => {
        event.preventDefault();
        setQuestionList([
          ...questionList,
          {
            question: '',
            answerList: [{ answer: '', isThisCorrect: false }],
          },
        ]);
    };

    const removeQuestion = (event, index) => {
        event.preventDefault()
        let list = [...questionList];
        list.splice(index, 1);
        setQuestionList(list);
    };

    const handleQuestionChange = (e, index) => {
        const { name, value } = e.target;
        let list = [...questionList];
        list[index][name] = value;
        setQuestionList(list);
        console.log(questionList)
    };

    const addAnswer = (e, index) => {
        e.preventDefault();
        let list = [...questionList];
        list[index].answerList.push({ answer: '' });
        setQuestionList(list);
    }

    const handleCheckboxChange = (event, index, index2) => {
        event.preventDefault();
        const value = event.target.checked;

        let copyQuestionList = [...questionList];
        let questionAtIndex = copyQuestionList[index];
        let theAnswers = questionAtIndex.answerList;

        theAnswers[index2].isThisCorrect = value;
        setQuestionList(copyQuestionList);
    };

  return (
    <form className='question-form' onSubmit={handleSubmit}>
      <h1>Create Questions</h1>
      {questionList.map((singleQuestion, index) => (
        <div key={index} className='question-panel'>
          <p>Question #{index + 1}</p>
          <div className='row-flex'>
            <input
              className='question-form-input'
              type='text'
              label='question'
              name='question'
              placeholder='question'
              value={singleQuestion.question}
              onChange={(e) => handleQuestionChange(e, index)}
            ></input>
            <button
              className='button-reset'
              onClick={(e) => removeQuestion(e, index)}
            >
              <span className='material-symbols-rounded'>delete</span>
            </button>
          </div>

          <div>
            {singleQuestion.answerList.map((singleAnswer, index2) => (
              <div key={index2}>
                <p>Answer #{index2 + 1}</p>
                <div className='row-flex'>
                  <input
                    type='checkbox'
                    value={singleAnswer.isThisCorrect}
                    onChange={(e) => handleCheckboxChange(e, index, index2)}
                  />

                  <input
                    className='answer-form-input'
                    type='text'
                    label='answer'
                    name='answer'
                    placeholder='answer'
                    value={singleAnswer.answer}
                    onChange={(e) => handleAnswerChange(e, index, index2)}
                  ></input>

                  <button
                    className='button-reset'
                    onClick={(event) => removeAnswer(event, index, index2)}
                  >
                    <span className='material-symbols-rounded'>delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className='button-reset'
            id='add-new-answer-button'
            onClick={(e) => addAnswer(e, index)}
          >
            <span className='material-symbols-outlined'>add</span>add answer
          </button>
        </div>
      ))}
      <div className='spaceAround'>
        <button
          className='button-reset'
          id='add-new-question-button'
          onClick={(e) => addQuestion(e)}
        >
          <span className='material-symbols-outlined'>add</span>
          add question
        </button>

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
          className='button-reset'
        >
          <span className='material-symbols-outlined'>done</span>
          submit
        </button>
      </div>
    </form>
  );
}

export default CreateQuestionsForm;
