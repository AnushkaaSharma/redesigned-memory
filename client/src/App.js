// client/src/App.js

import React from 'react';
import QuizGenerator from './components/QuizGenerator';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to the Quiz Generator</h1>
      <QuizGenerator />
    </div>
  );
};

export default App;
