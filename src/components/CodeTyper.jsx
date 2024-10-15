import React, { useState, useEffect } from 'react';

const CodeTyper = () => {
  const [currentSnippet, setCurrentSnippet] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);

  const codeSnippets = [
    'console.log("Hello, World!");',
    'function add(a, b) { return a + b; }',
    'const arr = [1, 2, 3].map(x => x * 2);',
    'import React from "react";',
    'useEffect(() => { /* do something */ }, []);'
  ];

  useEffect(() => {
    newSnippet();
  }, []);

  const newSnippet = () => {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    setCurrentSnippet(codeSnippets[randomIndex]);
    setUserInput('');
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value === currentSnippet) {
      setScore(score + 1);
      newSnippet();
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <p className="text-green-400 font-mono mb-2">{currentSnippet}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="w-full bg-gray-700 text-white font-mono p-2 rounded"
        placeholder="Type the code here..."
      />
      <p className="text-white mt-2">Score: {score}</p>
    </div>
  );
};

export default CodeTyper;
