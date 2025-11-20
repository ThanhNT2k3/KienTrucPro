import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a user query to the Gemini model acting as a construction consultant.
 */
export const askConstructionConsultant = async (userMessage: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    const systemInstruction = `You are an expert construction consultant and architect for a company called 'KienTrucPro'. 
    Your goal is to help potential clients with questions about building materials, renovation costs (estimates), architectural styles, and construction processes.
    Keep answers professional, concise, and helpful. 
    If the user asks for a specific quote, tell them to use the contact form on the website for a detailed estimate.
    Use Vietnamese language primarily, unless the user speaks English.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response in a chat context
      }
    });

    return response.text || "I apologize, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Error querying Gemini:", error);
    return "Sorry, our AI consultant is currently unavailable. Please contact our office directly.";
  }
};