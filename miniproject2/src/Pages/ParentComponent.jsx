import React, { useState, useEffect} from 'react';
import APIData from './API';
// import Tea from './Tea';
import Heading from '../Heading';
import "../ParentComponent.css";
import RowAndColumnSpacing from './InteractiveTeaGame';
import ResultsOfTeaGame from './ResultsOfTeaGame';
import PreparationPage from './PreparationPage';


const ParentComponent = () => {
  const [characterName, setCharacterName] = useState('');
  const [selectedTea, setSelectedTea] = useState('');
  const [showAPIData, setShowAPIData] = useState(true);
  const [showRowAndColumnSpacing, setShowRowAndColumnSpacing] = useState(false);
  const [receivedTea, setReceivedTea] = useState('');
  const [teaIngredients, setTeaIngredients] = useState('');
  const [correctTeaIngredients, setCorrectTeaIngredients]= useState('');
  const [characterPhoto, setCharacterPhoto]= useState('');
  const [showResults, setShowResults] = useState(false);
  const [showPreparations, setShowPreparations] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [score, setScore]= useState(0);

  //whenever character generator gets a new character, it will send that new name 
  const handleCharacterNameChange = (newName) => {
    setCharacterName(newName);

  };
  // if correct tea is submitted, grab and set that tea
  const handleTeaValidationSuccess = (tea) => {
    console.log("Entered tea:", tea);
    setReceivedTea(tea);
  };
  
  //when the button is clicked, it will hide the character generator and show preparations page
  const TeaGameButton = () => {
    setShowAPIData(false); // Hide APIData
    setShowPreparations(true)
};

    //when timer runs out it will trigger this
const TeaGameStart = () => {
  setShowPreparations(false)
  setShowRowAndColumnSpacing(true)
};

// all correct ingredients for the entered tea will be set here
const handleCorrectTeaIngredients = (ingredients) => {
  console.log("correct tea ingredients:", ingredients);
  setCorrectTeaIngredients(ingredients);
};
// all ingredients will be set here
const handleTeaIngredients = (ingredients) => {
  console.log("all tea ingredients:", ingredients);
  setTeaIngredients(ingredients);
};

// validation for submission
const handleSubmit = (isCorrect) => {
  if (isCorrect) {
    // Logic to handle the case when the user submits with correct ingredients
    console.log('Congratulations! You selected the correct ingredients.');
    setShowRowAndColumnSpacing(false)
    setSubmissionStatus(isCorrect ? 'success' : 'failed');
    setShowResults(true); 
    setScore(score => score+1)
    // Additional actions like updating state, showing a success message, etc.
  } else {
    // Logic to handle the case when the user submits with incorrect ingredients
    console.log('Oops! Some ingredients are incorrect. Please try again.');
    setShowRowAndColumnSpacing(false)
    setSubmissionStatus(isCorrect ? 'success' : 'failed');
    setShowResults(true); 
    
    // Additional actions like resetting state, showing an error message, etc.
  }
};

//use the photo from the character that was generated
const handlePhoto = (photo) => {
  setCharacterPhoto(photo);
};

//after a round, goes back to generate character page
const handleNextCustomer = () => {
  setShowResults(false); 
  setShowAPIData(true); // Hide APIData
};
//after losing, goes back to generate character page
const handleRestartGame = () => {
  setShowResults(false); 
  setShowAPIData(true); // Hide APIData
  setScore(0)
};



  console.log(characterName)
  return (
    <div>
    <Heading></Heading>
    <div className="ParentComponent">
        
    {showPreparations &&<PreparationPage onTimerEnd={TeaGameStart} TeaIngredients={correctTeaIngredients} Tea={receivedTea}/>}  
        {showResults &&<ResultsOfTeaGame PhotoURL={characterPhoto} name={characterName} nextCustomer={handleNextCustomer} submissionStatus={submissionStatus} score={score} restartGame={handleRestartGame}/>}
        {showAPIData &&<APIData onNameChange={handleCharacterNameChange} selectedTea={selectedTea} onTeaValidationSuccess={TeaGameButton} TeaReceieved={handleTeaValidationSuccess} TeaIngredients={handleTeaIngredients} CorrectIngredients={handleCorrectTeaIngredients} PhotoURL={handlePhoto} />}
      {showRowAndColumnSpacing && <RowAndColumnSpacing Tea={receivedTea} Ingredients={teaIngredients} CorrectIngredients={correctTeaIngredients} onSubmit={handleSubmit}/>}
      
    </div>
    </div>
  );
};

export default ParentComponent;