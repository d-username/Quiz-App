import { useState } from 'react';

function CreateQuestionsForm() {
  const [questionList, setQuestionList] = useState([
    {
      question: 'first question',
      answerList: [{ answer: 'first answer' }, { answer: 'second answer' }],
    },
    // {
    //   question: 'second question',
    //   answerList: [{ answer: '3rd answer' }, { answer: '4th answer' }],
    // },
  ]);

  console.log(questionList);

  const handleSubmit = () => {};
  const removeAnswer = () => {};
  const handleAnswerChange = () => {};

  const addQuestion = (event) => {
    event.preventDefault();
    setQuestionList([...questionList, { question: '' }]);
  };

  const removeQuestion = (event, index) => {
    let list = [...questionList];
    list.splice(index, 1);
    setQuestionList(list);
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    let list = [...questionList];
    list[index][name] = value;
    setQuestionList(list);
  };

  return (
    <form className='question-form' onSubmit={handleSubmit}>
      {questionList.map((singleQuestion, index) => (
        <div key={index}>
          <input
            className='question-form-input'
            type='text'
            label='question'
            name='question'
            placeholder='question'
            value={singleQuestion.question}
            onChange={(e) => handleQuestionChange(e, index)}
          ></input>
          <button onClick={() => removeQuestion(index)}>remove question</button>

          <div>
            {singleQuestion.answerList.map((answer, index) => (
              <div key={index}>
                <input
                  className='answer-form-input'
                  type='text'
                  label='answer'
                  name='answer'
                  placeholder='answer'
                  value={answer.answer}
                  onChange={(e) => handleAnswerChange(e, index)}
                ></input>
                <button onClick={() => removeAnswer(index)}>
                  remove answer
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button id='add-new-question-button' onClick={addQuestion}>
        add question
      </button>

      <button id='question-submit-button' type='submit'>
        submit
      </button>
    </form>
  );
}

export default CreateQuestionsForm;
