import { useState } from 'react';

function CreateQuestionsForm() {
  const [questionList, setQuestionList] = useState([
    {
      question: '',
      answerList: [{ answer: '' }],
    }
  ]);

  const handleSubmit = () => {};

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
        setQuestionList([...questionList, { 
        question: '',
        answerList: [{ answer: '' }],
        }]);
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
          <button onClick={(e) => removeQuestion(e, index)}>remove question</button>

          <div>
            {singleQuestion.answerList.map((singleAnswer, index2) => (
              <div key={index2}>
                <input
                  className='answer-form-input'
                  type='text'
                  label='answer'
                  name='answer'
                  placeholder='answer'
                  value={singleAnswer.answer}
                  onChange={(e) => handleAnswerChange(e, index, index2)}
                ></input>
                <button onClick={(event) => removeAnswer(event, index, index2)}>
                  remove answer
                </button>
              </div>
            ))}
          </div>

          <button id='add-new-answer-button' onClick={(e) => addAnswer(e,index)}>
            add answer
          </button>
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
