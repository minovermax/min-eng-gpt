import { NextResponse } from "next/server";
import { openai } from "./model";

export async function getCompletion(prompt) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.4,
      max_tokens: 300,
      top_p: 1,
      frequency_penaly: 0,
      presence_penalty: 0,
    });
    return NextResponse.json({ result: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json(error.response.data, {
        status: error.response.status,
      });
    } else {
      console.error(`error with open ai api request: ${error.message}`);
      return NextResponse.json(
        {
          error: {
            message: "an error occurred during request.",
          },
        },
        {
          status: 500,
        }
      );
    }
  }
}

// prompt for sentences
export function getCompleteSentences(words) {
  const prompt = `Write 5 individual sentences that includes the following word(s): ${words}.
    Sentences containing the word(s) ${words
      .map((word) => `"${word}"`)
      .join(" ")}:`;
  console.log(prompt);
  return getCompletion(prompt);
}
