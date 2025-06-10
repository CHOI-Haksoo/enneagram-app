
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveResponse({ userId, typeScores, selectedAdjectives }) {
  try {
    await addDoc(collection(db, "responses"), {
      userId: userId || null,
      timestamp: Timestamp.now(),
      scores: typeScores,
      adjectives: selectedAdjectives
    });
    console.log("✅ 응답 저장 성공!");
  } catch (e) {
    console.error("❌ 응답 저장 실패:", e);
  }
}
