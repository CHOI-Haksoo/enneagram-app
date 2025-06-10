// questionFlow.js

// 기본 문항 데이터 가져오기
import questionData from "./questionData";
// 박스 검사 데이터 가져오기
import boxData from "./boxData";

// 전체 검사 흐름 정의
const questionFlow = [
  {
    id: "basic",
    type: "basic",
    title: "기본문항 검사",
    questions: questionData,
  },
  {
    id: "box",
    type: "box",
    title: "9박스 핵심문구 선택",
    boxes: boxData,
  }
];

export default questionFlow;