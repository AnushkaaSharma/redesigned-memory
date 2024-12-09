import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const useQuiz = () => {
  const { quizState, setQuizState } = useContext(QuizContext);
  return { quizState, setQuizState };
};

export default useQuiz;