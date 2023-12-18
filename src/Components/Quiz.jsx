import React, { useState } from 'react';
import questions from './QuizData'; // Import your questions data

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (questionIndex, selectedOptionPoints) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOptionPoints;
    setUserAnswers(updatedAnswers);
  };

  const calculateTotalScore = () => {
    let totalScore = 0;
    // Calculate the total score based on userAnswers
    // ...
    return totalScore;
  };

  const handleShowResult = () => {
    setShowResult(true);
    // Additional logic if needed when showing the result
  };

  return (
    <div>
      {/* Render questions and options */}
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={option.points}
                    onChange={() => handleAnswerSelection(index, option.points)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Button to show the result */}
      <button onClick={handleShowResult}>Show Result</button>

      {/* Display the result when showResult is true */}
      {showResult && (
        <div>
          <h2>Total Score: {calculateTotalScore()}</h2>
          {/* Other relevant information or components for the result */}
        </div>
      )}
    </div>
  );
}

export default Quiz;
