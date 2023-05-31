import { OpenAIApi, Configuration } from "openai";

export const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // open ai api key from .env
});

const openai = new OpenAIApi(configuration); // open ai object with config containing api key

export default openai;
