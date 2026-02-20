import { GoogleGenAI, Type } from "@google/genai";

// Recuperación segura de la API Key en el contexto del navegador
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Silenciar errores de acceso a process en entornos donde no existe
  }
  return null;
};

export async function generateDevotional(theme: string) {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("Gemini API Key no configurada. El servicio de devocionales automáticos no estará disponible.");
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
    console.error("Error al generar el devocional:", error);
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
    console.error("Error al generar la reflexión:", error);
    return "La Palabra de Dios es lámpara a nuestros pies y lumbrera a nuestro camino.";
  }
}