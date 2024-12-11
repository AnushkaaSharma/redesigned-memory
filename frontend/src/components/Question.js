import React from 'react';
import Options from './Options';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question.text}</h5>
        <Options options={question.options} onOptionSelect={onAnswer} />
      </div>
    </div>
  );
};

export default Question;