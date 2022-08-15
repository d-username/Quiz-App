import { useState } from 'react';

function CreateQuestionsForm() {
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)
  const [quiz, setQuiz] = useState({
    title: '',
    questions: [
    {
      question: '',
      answerList: [{ answer: '', isThisCorrect: false }],
    },
  ]});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quiz),
    };
    fetch('http://localhost:3500/api/quiz', requestOptions)
      .then((response) => response.json())


    renderSuccessAlert()

    setQuiz({
      title: '',
      questions: [
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
    event.preventDefault();

    setQuiz({
      title: '',
      questions: [
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

    let copyQuestionList = { ...quiz };
    let questionAtIndex = copyQuestionList.questions[index];
    let theAnswers = questionAtIndex.answerList;

    theAnswers[index2][name] = value;
    setQuiz(copyQuestionList);

  };

  const removeAnswer = (event, index, index2) => {
    event.preventDefault();

    let copyQuestionList = { ...quiz };
    let questionAtIndex = copyQuestionList.questions[index];
    let theAnswers = questionAtIndex.answerList;

    theAnswers.splice(index2, 1);
    setQuiz(copyQuestionList);
  };

  const addQuestion = (event) => {
    event.preventDefault();

    let copyQuestionList = {...quiz}
    copyQuestionList.questions = [
      ...copyQuestionList.questions,
      {
        question: '',
        answerList: [{ answer: '', isThisCorrect: false }],
      },
    ];

    setQuiz(copyQuestionList)
  };

  const removeQuestion = (event, index) => {
    event.preventDefault();

    let copyQuestionList = { ...quiz };
    copyQuestionList.questions.splice(index, 1);
    setQuiz(copyQuestionList);
  };

  const handleQuestionChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;

    let copyQuestionList = { ...quiz };
    copyQuestionList.questions[index][name] = value

    setQuiz(copyQuestionList);
  };

  const addAnswer = (e, index) => {
    e.preventDefault();

    let copyQuestionList = { ...quiz };
    let theParticularQuestion = copyQuestionList.questions[index];

    theParticularQuestion.answerList = [
      ...theParticularQuestion.answerList,
      { answer: '', isThisCorrect: false },
    ];
    setQuiz(copyQuestionList)
  };

  const handleCheckboxChange = (event, index, index2) => {
    event.preventDefault();
    const value = event.target.checked;

    let copyQuestionList = {...quiz};
    let questionAtIndex = copyQuestionList.questions[index];
    let theAnswers = questionAtIndex.answerList;

    theAnswers[index2].isThisCorrect = value;
    setQuiz(copyQuestionList);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let copyQuestionList = { ...quiz };
    copyQuestionList[name] = value

    setQuiz(copyQuestionList);
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
          value={quiz.title}
          onChange={(e) => handleTitleChange(e)}
        ></input>
      </div>

      {quiz.questions.map((singleQuestion, index) => (
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
