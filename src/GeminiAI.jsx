import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC-ZdmeVCJ5zCbKAvPbsEqtHNB-Ob1pCcA";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function sendingMsgtoGeminiAI(message) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = message;
  const result = await model.generateContent(prompt);
  const res = result.response;
  const text = res.text();
  console.log(text);
  return text;
}
