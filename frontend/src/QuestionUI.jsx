import React from 'react';
import './QuestionsUI.css'; // Import the CSS file

const QuestionsUI = ({ questions }) => {
  return (
    <div>
      <h1>Questions</h1>
      {questions.map((question, index) => {
        if (question.type === "ANAGRAM") {
          return (
            <div key={index} className="card">
              <h2>{question.title}</h2>
              <p>Rearrange the {question.anagramType === "WORD" ? "letters" : "words"}:</p>
              <div className="blocks">
                {question.blocks.map((block, idx) => (
                  <span key={idx} className="block">
                    {block.text}
                  </span>
                ))}
              </div>
              <p>
                <strong>Solution:</strong> {question.solution}
              </p>
            </div>
          );
        }

        if (question.type === "MCQ") {
          return (
            <div key={index} className="card">
              <h2>{question.title}</h2>
              <ul>
                {question.options.map((option, idx) => (
                  <li key={idx} className={option.isCorrectAnswer ? "correct" : "option"}>
                    {option.text}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        if (question.type === "READ_ALONG") {
          return (
            <div key={index} className="card">
              <h2>{question.title}</h2>
              <p>This is a read-along question.</p>
            </div>
          );
        }

        return (
          <div key={index} className="card">
            <h2>{question.title}</h2>
            <p>Unknown question type.</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsUI;
