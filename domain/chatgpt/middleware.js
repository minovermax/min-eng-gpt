import { NextResponse } from "next/server";
import { configuration } from "./model";

export const openaiKeyValidator = (handler) => (req) => {
  // checking api key
  if (!configuration.apiKey) {
    return NextResponse.json(
      {
        error: {
          message: "open ai key not configured",
        },
      },
      {
        status: 500,
      }
    );
  }
  return handler(req);
};
