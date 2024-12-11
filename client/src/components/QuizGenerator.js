import React, { useState } from 'react';
import axios from 'axios';

const QuizGenerator = () => {
  const [prompt, setPrompt] = useState(''); // State for user input
  const [quizData, setQuizData] = useState(null); // State to hold quiz data
  const [error, setError] = useState(null); // State for error handling

  const handleGenerateQuiz = async () => {
    try {
      setError(null); // Reset error state
      console.log("before calling server", prompt);
      
      const response = await axios.post('http://localhost:3000/api/quiz/generate', { prompt: prompt });
      console.log('server response',response);
      setQuizData(response.data.data); // Assuming the API sends the quiz data in `data`
    } catch (err) {
      setError('Error generating quiz, please try again');
    }
  };

  return (
    <div>
      <h1>Quiz Generator</h1>
      <div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a quiz prompt"
        />
        <button onClick={handleGenerateQuiz}>Generate Quiz</button>
      </div>

      {error && <p>{error}</p>} {/* Display error if any */}
      
      {quizData && (
        <div>
          <h2>Generated Quiz</h2>
          {quizData.questions.map((question, index) => (
            <div key={index}>
              <p>{index + 1}. {question.question}</p>
              <ul>
                {Object.entries(question.options).map(([key, option]) => (
                  <li key={key}>{key}) {option}</li>
                ))}
              </ul>
              <p><strong>Answer: </strong>{question.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
