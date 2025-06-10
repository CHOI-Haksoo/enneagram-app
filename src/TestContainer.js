// TestContainer.js
import React, { useState } from "react";
import questionData from "./questionData";
import QuestionItem from "./QuestionItem";

const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

function TestContainer() {
  const [mixedQuestions] = useState(() => {
  const fixed = questionData[0];
  const rest = questionData.slice(1);
  const shuffled = shuffle(rest);
  return [fixed, ...shuffled];
});

  const [page, setPage] = useState(0);
  const questionsPerPage = 3;
  const totalPages = Math.ceil(mixedQuestions.length / questionsPerPage);

  const currentQuestions = mixedQuestions.slice(
    page * questionsPerPage,
    page * questionsPerPage + questionsPerPage
  );

  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const allAnswered = currentQuestions.every((q) => answers[q.id]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>기본문항 검사</h2>

      {currentQuestions.map((q, idx) => (
  <QuestionItem
    key={q.id}
    question={q.text}
    index={page * questionsPerPage + idx + 1}  // 문항 번호용
    value={answers[q.id]}
    onChange={(val) => handleAnswer(q.id, val)}
  />
))}

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          이전
        </button>
        <span style={{ margin: "0 1rem" }}>
          {page + 1} / {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={!allAnswered}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default TestContainer;