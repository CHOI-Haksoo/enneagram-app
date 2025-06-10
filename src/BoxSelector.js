// BoxSelector.js
import React, { useState } from "react";
import "./BoxSelector.css";

const boxLabels = [
  `원칙 준수와 완벽의 추구\n실수를 보면 고치고 싶음\n95점에도 만족하기 어려움\n짜증, 긴장을 자주 경험\n칭찬, 이완, 타협이 어려움`,
  `도움 제공과 인정의 추구\n주변을 챙겨야 마음이 편함\n먼저 다가서고 베풂\n부탁과 거절이 어려움\n배려에 반응이 없으면 서운`,
  `성과와 효율의 추구\n성공적이고 멋진 이미지 연출\n상황에 맞게 유연하게 적응\n이왕이면 1등, 남보다 빨리\n실패를 회피`,
  `남다른 감성과 의미의 추구\n무리나 유행을 따르지 않음\n무엇인가 결핍된 느낌\n감정 기복이 있음\n나만의 색깔과 취향을 표현`,
  `지식과 이해의 추구\n참여보다 관찰과 거리두기\n충분히 알기 전엔 말하지 않음\n생기, 감정, 활력이 부족\n자원, 노력, 시간 등을 아끼고 비축`,
  `신뢰와 안전의 추구\n역할에 충실한 협력자\n예상되는 문제와 위험을 찾고 대비\n'만약','혹시'를 자주 떠올림\n혼자 결정은 불안, 주변에 물음`,
  `즐거움과 열정의 추구\n자유롭고 신선한 발상에 능함\n반복, 지루함, 진지함을 회피\n긍정과 재미, 즉각적 만족\n충동적, 즉흥적이고 산만함`,
  `힘과 도전의 추구\n본능적으로 판단하고 실행\n추진력과 돌파력\n거칠고 공격적임\n분노 조절이 어려움`,
  `조화와 평안의 추구\n두루두루 잘 맞추고 적응함\n느긋하고 태평함\n자기 주장과 결정이 어렵고 갈등 회피\n유한 듯하지만 고집이 셈`,
];

const ranks = ["1순위", "2순위", "3순위", "X"];

function BoxSelector() {
  const [selections, setSelections] = useState({});
  const [completed, setCompleted] = useState(false);
  const handleSelect = (label, rank) => {
    const updated = { ...selections };
    for (const key in updated) {
      if (updated[key] === rank) {
        delete updated[key];
      }
    }
    updated[label] = rank;
    setSelections(updated);
  };

  const isDisabled = (rank) =>
    Object.values(selections).includes(rank) &&
    !Object.entries(selections).some(([_, r]) => r === rank);

  const isReady =
    Object.keys(selections).length === 4 &&
    ranks.every((r) => Object.values(selections).includes(r));

  return (
    <div style={{ padding: "2rem" }}>
      <h2>9박스 핵심 문구 선택</h2>
      <p style={{ whiteSpace: "pre-line" }}>
        아홉 박스 가운데 자신과 가장 가까운 것에 1,  
        그 다음 가까운 것에 2,  
        세 번째로 가까운 것에 3,  
        그리고 자신과 가장 먼 것에 X를,  
        해당 박스의 우측 상단 공란에 입력하세요.
      </p>

      <div className="box-grid">
        {boxLabels.map((label) => (
          <div key={label} className="box-item">
            {/* 선택지: 우측 상단 */}
            <div style={{
  position: "absolute",
  top: "0.25rem",
  right: "0.5rem",
  display: "flex",
  flexDirection: "row",
  gap: "0.25rem"
}}>
              {ranks.map((rank) => (
                <label key={rank} style={{ marginLeft: "0.25rem", fontSize: "0.8rem" }}>
                  <input
                    type="radio"
                    name={label}
                    value={rank}
                    checked={selections[label] === rank}
                    onChange={() => handleSelect(label, rank)}
                    disabled={
                      selections[label] !== rank && isDisabled(rank)
                    }
                  />
                  {rank}
                </label>
              ))}
            </div>

            {/* 문장 묶음 */}
            <p style={{ whiteSpace: "pre-line" }}>{label}</p>
          </div>
        ))}
      </div>

     <button disabled={!isReady} onClick={() => setCompleted(true)}>
  완료
</button>
{completed && (
  <p style={{ marginTop: "1rem", color: "green", fontWeight: "bold" }}>
    검사가 완료되었습니다. 수고했습니다.
  </p>
)}
    </div>
  );
}

export default BoxSelector;