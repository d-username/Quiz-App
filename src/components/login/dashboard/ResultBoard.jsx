function ResultBoard({ score, currentQuiz, setShowResults, setScore }) {
  const handleCloseButton = () => {
    setShowResults(false);
    setScore({ goodAnswers: 0 });
  };

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
        onClick={() => handleCloseButton(false)}
      >
        <span class='material-symbols-outlined'>close</span>close
      </button>
    </div>
  );
}

export default ResultBoard;
