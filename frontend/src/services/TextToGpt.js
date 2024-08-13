import {GoogleGenerativeAI} from "@google/generative-ai"
import toast from "react-hot-toast";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_API_KEY);

export default async function checkAnswer({question, answer}) {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
    const prompt = `Q: ${question}\nA: ${answer}\nRate this answer strictly on a scale of 0 to 5 and only provide the rating to me like a number only:`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    toast.success(`You got a rating of ${text}`)
}
