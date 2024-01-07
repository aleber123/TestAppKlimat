import React from 'react';
// Funktion för att visa resultatet av quizzet
const QuizResult = ({ totalScore }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Total Score: {totalScore}</p>
      
    </div>
  );
};

export default QuizResult;
