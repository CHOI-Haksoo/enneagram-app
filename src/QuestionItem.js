// QuestionItem.js
import React from "react";
import "./QuestionItem.css";

function QuestionItem({ question, index, onChange, value }) {
  return (
    <div className="question-item">
      <p>
        <strong>{index}.</strong> {question}
      </p>
      <div className="scale">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <label key={num}>
            <input
              type="radio"
              name={`question-${index}`} // ← 라디오 그룹 분리
              value={num}
              checked={value === num}     // ← 현재 선택된 값
              onChange={() => onChange(num)} // ← 값 전달
            />
            {num}
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionItem;