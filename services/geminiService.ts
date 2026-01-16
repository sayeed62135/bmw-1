
import { GoogleGenAI } from "@google/genai";
import { VEHICLES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Executive Motors Concierge," an elite AI assistant for a luxury car dealership. 
Your tone is professional, sophisticated, and helpful. 
You know everything about the current BMW lineup:
${VEHICLES.map(v => `- ${v.model}: ${v.description} Specs: ${v.engine}, ${v.power}, ${v.acceleration}. Price: ${v.price}`).join('\n')}

Guide customers based on their needs (family, performance, luxury, electric). 
If they ask for something not in the list, politely explain that you specialize in the premium BMW range provided by Executive Motors.
Always maintain a luxury brand voice.
`;

export async function getConciergeResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I apologize, but I am having trouble connecting to my systems. How else may I assist you today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm currently unable to process your request. Please try again or contact our sales team directly.";
  }
}
