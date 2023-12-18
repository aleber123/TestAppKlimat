import React, { useState } from 'react';
import questions from './QuizData'; // Import your questions data
import 'bootstrap-icons/font/bootstrap-icons.css';

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
        return 'Category 4';
      } else if (totalScore >= 11 && totalScore <= 16) {
        return 'Category 1';
      } else if (totalScore >= 17 && totalScore <= 22) {
        return 'Category 2';
      } else if (totalScore >= 23 && totalScore <= 29) {
        return 'Category 3';
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
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
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
      <div className="card mt-4" style={{ minHeight: "300px" }}>
        <div className="card-header text-center text-danger">
          <h2>My React Quiz Application</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">{(currentQuestionIndex + 1) + ". " + question.question}</h5>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="form-check">
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
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div className="card-footer text-muted">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            <i className="bi bi-arrow-left"></i>
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button onClick={handleShowResult}>
              <i className="bi bi-arrow-right"></i>
            </button>
          ) : (
            <>
              <button onClick={handleSkip}>Skip Question</button>
              <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                <i className="bi bi-arrow-right"></i>
              </button>
            </>
          )}
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
          <h2>Total Score: {totalScore}</h2>
          <p>User Category: {userCategory}</p>
          {/* Other relevant information or components for the result */}
        </div>
      )}
    </div>
  );
}

export default Quiz;
