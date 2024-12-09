import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;