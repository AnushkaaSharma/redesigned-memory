import React from 'react';

const Options = ({ options, onOptionSelect }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          className="btn btn-outline-secondary d-block mb-2"
          onClick={() => onOptionSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;