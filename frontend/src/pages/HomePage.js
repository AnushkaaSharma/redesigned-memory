import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="container text-center">
      <h1>Welcome to the AI Quiz</h1>
      <p>Test your knowledge with AI-generated questions!</p>
      <button className="btn btn-primary" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
