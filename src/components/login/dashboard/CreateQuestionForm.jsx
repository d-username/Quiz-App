import { useState } from 'react';

function CreateQuestionsForm() {
    const [answerList, setAnswerList] = useState([{ answer: '' }]);

    console.log(answerList)

    const handleSubmit = () => {};
    const addQuestion = () => {};
    const handleQuestionChange = () => {};


    const addAnswer = (event) => {
        event.preventDefault()
        setAnswerList([...answerList, { answer: '' }]);
    };

    const removeAnswer = (event, index) => {
      let list = [...answerList]
      list.splice(index, 1);
      setAnswerList(list)
    };

    const handleAnswerChange = (e, index) => {
        const {name, value} = e.target
        let list = [...answerList];
        list[index][name] = value
        setAnswerList(list)
    };

  return (
    <form className='question-form' onSubmit={handleSubmit}>
      <input
        className='question-form-input'
        type='text'
        label='question'
        name='question'
        placeholder='question'
        onChange={handleQuestionChange}
      ></input>

      {answerList.map((singleAnswer, index) => (
        <div key={index}>
          <input
            className='question-form-input'
            type='text'
            label='answer'
            name='answer'
            placeholder='answer'
            value = {singleAnswer.answer}
            onChange={(e) => handleAnswerChange(e, index)}
          ></input>
          <button onClick={() => removeAnswer(index)}>remove answer</button>
        </div>
      ))}

      <button id='add-answer-button' onClick={addAnswer}>
        add answer
      </button>

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
