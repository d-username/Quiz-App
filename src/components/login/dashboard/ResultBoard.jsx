function ResultBoard({ score, currentQuiz, setShowResults }) {

    console.log('i wanna check your lenght', currentQuiz)
    

  return (
    <div className='result-board'>
      <p className='result-title'>Well Done!</p>
      <img src='/images/check.png' alt='check-icon' width={100} />
      <p>
        Your result is: {score.goodAnswers} out of{' '}
        {currentQuiz.questions.length}
      </p>
      <button
        className='button-reset whiteButton'
        onClick={() => setShowResults(false)}
      >
        <span class='material-symbols-outlined'>close</span>close
      </button>
    </div>
  );
}

export default ResultBoard;
