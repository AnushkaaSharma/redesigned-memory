import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizPage() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make an API call to the backend to fetch quiz data
    axios
      .get('/api/quiz')  // Proxy will redirect this to http://localhost:3000/api/quiz
      .then((response) => {
        setQuizData(response.data);  // Store the quiz data
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError('Failed to fetch quiz data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading quiz data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Quiz Page</h2>
      <ul>
        {quizData.map((quiz, index) => (
          <li key={index}>{quiz.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuizPage;
