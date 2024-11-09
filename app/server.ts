"use server";

import OpenAI from "openai";
import { ChatHistoryMessage } from "./page";
const openai = new OpenAI();

const callGPTServer = async ({
  messages,
}: {
  messages: ChatHistoryMessage[];
}) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: messages as any,
  });

  const response = completion.choices[0].message.content;

  return response;
};

export { callGPTServer };
