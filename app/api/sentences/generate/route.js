import { NextResponse } from "next/server";
import { openaiKeyValidator } from "@/domain/chatgpt/middleware";
import { defineRouteBuilder } from "@/utils/middleware";
import { getCompleteSentences } from "@/domain/chatgpt/service";

const defineRoute = defineRouteBuilder([openaiKeyValidator]);

export const POST = defineRoute(async function (req) {
  const { words } = await req.json();
  if (words.length === 0 || words.some((words) => words.trim().length === 0)) {
    return NextResponse.json(
      {
        error: {
          message: "please enter a valid word",
        },
      },
      {
        status: 400,
      }
    );
  }

  const result = getCompleteSentences(words);
  return result;
});
