import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../services/api';
import Question from '../components/Question';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    loadQuestions();
  }, []);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { questionId: questions[currentQuestionIndex]._id, answer }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Navigate to results or finalize quiz
      console.log('Quiz Complete', answers);
    }
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="container">
      <Question 
        question={questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
      />
    </div>
  );
};

export default QuizPage;
