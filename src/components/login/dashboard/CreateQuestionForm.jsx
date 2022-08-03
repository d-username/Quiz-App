import { useState } from 'react';

function CreateQuestionsForm() {
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)
  const [questionList, setQuestionList] = useState({
    title: '',
    questionsSet: [
    {
      question: '',
      answerList: [{ answer: '', isThisCorrect: false }],
    },
  ]});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting here');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionList),
    };
    fetch('http://localhost:3005/questionSets/', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log('this is the response data', data));

    
    renderSuccessAlert()

    setQuestionList({
      title: '',
      questionsSet: [
        {
          question: '',
          answerList: [{ answer: '', isThisCorrect: false }],
        },
      ],
    });
  };


  const renderSuccessAlert = () => {
    setIsSuccessVisible(true);

    setTimeout(() => {setIsSuccessVisible(false)}, 3000);
  }

  
  const resetFields = (event) => {
    console.log('resetting');
    event.preventDefault();

    setQuestionList({
      title: '',
      questionsSet: [
        {
          question: '',
          answerList: [{ answer: '', isThisCorrect: false }],
        },
      ],
    });
  };

  const handleAnswerChange = (e, index, index2) => {
    e.preventDefault();
    const { name, value } = e.target;

    let copyQuestionList = { ...questionList };
    let questionAtIndex = copyQuestionList.questionsSet[index];
    let theAnswers = questionAtIndex.answerList;

    theAnswers[index2][name] = value;
    setQuestionList(copyQuestionList);

    console.log('questionlist after answer change', questionList);
  };

  const removeAnswer = (event, index, index2) => {
    event.preventDefault();
    console.log('removing answer');

    let copyQuestionList = { ...questionList };
    let questionAtIndex = copyQuestionList.questionsSet[index];
    let theAnswers = questionAtIndex.answerList;

    theAnswers.splice(index2, 1);
    setQuestionList(copyQuestionList);
  };

  const addQuestion = (event) => {
    event.preventDefault();

    let copyQuestionList = {...questionList}
    copyQuestionList.questionsSet = [
      ...copyQuestionList.questionsSet,
      {
        question: '',
        answerList: [{ answer: '', isThisCorrect: false }],
      },
    ];

    setQuestionList(copyQuestionList)
  };

  const removeQuestion = (event, index) => {
    console.log('removing question')
    event.preventDefault();

    let copyQuestionList = { ...questionList };
    copyQuestionList.questionsSet.splice(index, 1);
    setQuestionList(copyQuestionList);
  };

  const handleQuestionChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;

    let copyQuestionList = { ...questionList };
    copyQuestionList.questionsSet[index][name] = value

    setQuestionList(copyQuestionList);
    console.log(questionList);
  };

  const addAnswer = (e, index) => {
    e.preventDefault();
    console.log('adding an answer here');

    let copyQuestionList = { ...questionList };
    let theParticularQuestion = copyQuestionList.questionsSet[index];

    theParticularQuestion.answerList = [
      ...theParticularQuestion.answerList,
      { answer: '', isThisCorrect: false },
    ];
    setQuestionList(copyQuestionList)
    console.log('updated questionlist', questionList);
  };

  const handleCheckboxChange = (event, index, index2) => {
    event.preventDefault();
    console.log('clicked')
    const value = event.target.checked;

    let copyQuestionList = {...questionList};
    let questionAtIndex = copyQuestionList.questionsSet[index];
    let theAnswers = questionAtIndex.answerList;

    theAnswers[index2].isThisCorrect = value;
    setQuestionList(copyQuestionList);
    console.log('questionlist after answer change', questionList);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let copyQuestionList = { ...questionList };
    copyQuestionList[name] = value

    setQuestionList(copyQuestionList);
    console.log(questionList);
  };

  return (
    <form className='question-form' onSubmit={(e) => handleSubmit(e)}>
      <h1>Create Quiz</h1>
      {isSuccessVisible && (
        <div className='success-notification'>
          <span class='material-symbols-outlined'>check_circle</span>success
        </div>
      )}
      <div className='question-form-title'>
        <p>Title</p>
        <input
          className='title-input'
          type='text'
          label='title'
          name='title'
          placeholder='title'
          value={questionList.title}
          onChange={(e) => handleTitleChange(e)}
        ></input>
      </div>

      {questionList.questionsSet.map((singleQuestion, index) => (
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
                    className='checkbox'
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
          className='button-reset greenButton'
        >
          <span className='material-symbols-outlined'>done</span>
          submit
        </button>
      </div>
    </form>
  );
}

export default CreateQuestionsForm;
