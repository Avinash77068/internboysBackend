const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

module.exports = async function askGemini(userPrompt, systemPrompt, fileContent = "", fileName = "") {
    try {
        // Make sure you are using a supported model name
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const chatPrompt = `
System Instructions: ${systemPrompt || "No instructions provided"}

Conversation:
User: ${userPrompt}

File (${fileName || "No file provided"}) content:
${fileContent || "No content provided"}

Assistant:`;

        const result = await model.generateContent(chatPrompt);

        return result.response?.text() || "No response from AI";
    } catch (error) {
        console.error(error); // log the error
        return "⚠️ Error: " + error.message;
    }
}
