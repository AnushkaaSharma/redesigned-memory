import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="container text-center">
      <h1>Quiz Results</h1>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>!
      </p>
      <p>{score / total >= 0.8 ? 'Great job! 🎉' : 'Keep practicing! 👍'}</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default ResultsPage;