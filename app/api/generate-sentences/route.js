import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({ // setting api key
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration); // declaring open ai object


export async function POST(req) { // calling api (POST)
    console.log
    if(!configuration.apiKey) {
        return NextResponse.json(
            {
                error: {
                    message:
                    "open ai key not configured"
                },
            },
            {
                status: 500,
            }
        );
    }

    const { words } = await req.json()
    if (words.trim().length === 0) {
        return NextResponse.json(
            {
                error: {
                    message: "please enter a valid word"
                },
            },
            {
                status: 400,
            }
        );
    }
    try {
        const completion = await openai.createCompletion({  // settings for request
            model: "text-davinci-003",
            prompt: generatePrompt(words), // words + prompts
            temperature: 0.7,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        return NextResponse.json({ result: completion.data.choices[0].text })
    } catch(error) {
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
                        message: "an error occurred during request."
                    },
                },
                {
                    status: 500,
                }
            );
        }
    }
}

function generatePrompt(words) {   // prompt that i want to use
    return (
        `Write 5 individual sentences that includes the following word(s): ${words}.
        Sentences containing the word(s) ${words}:`
    );
}