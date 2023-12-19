import React, { useState } from 'react';
import questions from './QuizData'; // Import your questions data
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../Fonts.module.css'; // Import your CSS module
import Container from 'react-bootstrap/Container';
import KontaktCard from './KontaktCard';
import Hero from './Hero';
import MedelSvensson from './MedelSvensson';
import Skeptiker from './Skeptiker';
import IngetResultat from './IngetResultat';

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (selectedOptionPoints) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOptionPoints;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSkip = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = 0; // Assign 0 points on skip
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateTotalScore = () => {
    let totalScore = 0;

    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] !== undefined) {
        totalScore += userAnswers[i]; // Assuming userAnswers stores points directly
      }
    }

    const categorizeUser = (totalScore) => {
      if (totalScore >= 0 && totalScore <= 10) {
        return <IngetResultat />;
      } else if (totalScore >= 11 && totalScore <= 16) {
        return <Hero />;
      } else if (totalScore >= 17 && totalScore <= 22) {
        return <MedelSvensson />;
      } else if (totalScore >= 23 && totalScore <= 29) {
        return <Skeptiker />;
      }
    };

    const userCategory = categorizeUser(totalScore);

    return {
      totalScore,
      userCategory,
    };
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const calculateProgress = () => {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    return progress;
  };

  const renderProgressBar = () => {
    const progress = calculateProgress();

    return (
      <div className="progress" style={{backgroundColor:"#FDFAF2",}}>
        <div 
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%`, backgroundColor:"#304742" }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    return (
      <div className='d-flex justify-content-center' style={{backgroundColor:"#BCD0A5"}}>
      <div className="card mt-4 p-5" style={{ minHeight: "300px", backgroundColor:"#BCD0A5", width:"50%"}}>
        <div className=" text-center">
        <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`} style={{color:"#304742"}} >KlimatQuiz: Matvanor</h2>
        </div>
        <div className="card-body">

          
        <div className="text-center">
        <p className={`${styles.openSans} ${styles.p}`} style={{color:"#304742"}}>Fråga {currentQuestionIndex + 1} of {questions.length}  </p>
         
        </div>
          <div className='p-5' style={{backgroundColor:"#FDFAF2", width:""}}>
        <p className={`${styles.openSans} ${styles.p}`}>  {(currentQuestionIndex + 1) + ". " + question.question} </p>
        </div>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="form-check pt-3 m-5">
              <input 
                className="form-check-input"
                type="radio"
                name={`question${currentQuestionIndex}`}
                id={`flexRadioDefault${optionIndex + 1}`}
                value={option.points}
                checked={userAnswers[currentQuestionIndex] === option.points}
                onChange={(e) => handleAnswerSelection(parseInt(e.target.value))}
              />
              <label className="form-check-label" htmlFor={`flexRadioDefault${optionIndex + 1}`}>
              <p className={`${styles.openSans} ${styles.p}`}>  {option.text}</p>
              
              </label>
            </div>
          ))}
        </div>
       
        <div >
            <Container className='d-flex justify-content-between' >
            
                <button style={{backgroundColor:"#304742", color:"#FDFAF2",width:"8rem", height:"5rem" }} onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="bi bi-arrow-left">
                  <p>Tillbaka</p>
                </button>
             
                    {currentQuestionIndex === questions.length - 1 ? (
                
                  <button style={{backgroundColor:"#304742", color:"#FDFAF2",width:"8rem", height:"5rem" }} onClick={handleShowResult} className='bi bi-arrow-right ' >
                    <p>Se resultat</p>
                  </button>
                ) : (
                  <>
                {/* <Col>
                  <button onClick={handleSkip}>Skip Question</button>
                  </Col> */}
             
                <button style={{backgroundColor:"#304742", color:"#FDFAF2", width:"8rem", height:"5rem" }}  onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} className='bi bi-arrow-right'>
                <p>Nästa fråga</p>
                </button>
             
              </>
            )}
            </Container>
        </div>
      </div>
      </div>
    );
  };

  const { totalScore, userCategory } = calculateTotalScore();

  return (
    <div>
      {renderProgressBar()}
      {renderQuestion()}
      {showResult && (
        <div>
          {/* <h2>Total Score: {totalScore}</h2> */}
          <p> {userCategory}</p>
          {/* Other relevant information or components for the result */}
        </div>
      )}
    </div>
  );
}

export default Quiz;