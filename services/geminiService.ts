import { GoogleGenAI, Type } from "@google/genai";

// Función segura para obtener la API KEY evitando ReferenceError en el navegador
const getApiKey = () => {
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }
  return "";
};

export async function generateDevotional(theme: string) {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("API Key no encontrada para generar devocional.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Genera un devocional cristiano breve sobre el tema: ${theme}. 
      Incluye un título, un versículo clave (Reina Valera 1960), una reflexión de un párrafo y una oración corta.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            verse: { type: Type.STRING },
            reflection: { type: Type.STRING },
            prayer: { type: Type.STRING }
          },
          required: ["title", "verse", "reflection", "prayer"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating devotional:", error);
    return null;
  }
}

export async function generateVerseReflection(verse: string) {
  const apiKey = getApiKey();
  if (!apiKey) return "La Palabra de Dios es lámpara a nuestros pies y lumbrera a nuestro camino.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporciona una reflexión espiritual profunda pero breve (máximo 100 palabras) sobre el siguiente versículo bíblico: "${verse}".`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating reflection:", error);
    return "La Palabra de Dios es lámpara a nuestros pies y lumbrera a nuestro camino.";
  }
}