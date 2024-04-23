

const ResultsOfTeaGame = ({ PhotoURL, name, nextCustomer, submissionStatus, score, restartGame }) => {

  //button for next round; sends to parent component
  const handleNextCustomer = () => {
    nextCustomer();
  }
  //button for restart game; sends to parent component
  const handleRestartGame = () => {
    restartGame();
  }

  return (
    <div className="JasmineTeaBox">
      <>
        {submissionStatus === 'success' && <div><p>Name: {name}</p><p><img src={PhotoURL} alt="Character" style={{ height: '200px' }} /></p><p>"Thank you!"</p><p>
          <button>Previous orders</button>
          <button onClick={handleNextCustomer}>Next customer</button>

        </p><p>Current score: {score}</p></div>}
        {submissionStatus === 'failed' && <div><p><img src="src/assets/images/fired.gif" alt="Character" style={{ height: '200px' }} /></p><p>Time ran out! YOU'RE FIRED!</p><p>
          <button onClick={handleRestartGame}>Start Again</button>

        </p><p>Final score: {score}</p></div>}
      </>
    </div>
  );
}

export default ResultsOfTeaGame;