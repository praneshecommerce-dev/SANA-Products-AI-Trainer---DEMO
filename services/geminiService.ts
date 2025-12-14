import { GoogleGenAI, Type } from "@google/genai";
import { Product, AIResponse, Language } from "../types";

// This will be populated by the user in the UI settings
export const getGeminiKey = (): string => {
  return localStorage.getItem('sana_gemini_key') || '';
};

export const setGeminiKey = (key: string) => {
  localStorage.setItem('sana_gemini_key', key);
};

export const generateProductExplanation = async (
  product: Product,
  language: Language
): Promise<AIResponse> => {
  const apiKey = getGeminiKey();
  if (!apiKey) {
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const langMap = {
    [Language.ENGLISH]: "English",
    [Language.ARABIC]: "Arabic",
    [Language.HINDI]: "Hindi"
  };

  const selectedLang = langMap[language];

  // Schema definition for structured output
  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      specs: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of technical specifications, bullet points."
      },
      usage: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of usage instructions, dimensions, or ratings."
      },
      summary: {
        type: Type.STRING,
        description: "A short educational summary for learning."
      }
    },
    required: ["specs", "usage", "summary"]
  };

  const prompt = `
    You are an expert technical trainer for SANA Products.
    Product Code: ${product.code}
    Product Name: ${product.name}

    Explain this product in ${selectedLang}.
    
    1. Provide 3-5 technical specifications (materials, voltage, type, etc).
    2. Provide 3-5 details about usage, dimensions, or safety ratings.
    3. Write a concise learning summary for a new employee.

    Tone: Professional, clear, and educational.
    If specific technical details are not known for this exact code, infer based on the product name and standard industry knowledge for this type of electrical/industrial component.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    
    return JSON.parse(text) as AIResponse;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};