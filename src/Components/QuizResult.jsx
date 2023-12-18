import React from 'react';

const QuizResult = ({ totalScore }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Total Score: {totalScore}</p>
      {/* Additional components or information related to the result */}
    </div>
  );
};

export default QuizResult;
