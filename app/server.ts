"use server";

import OpenAI from "openai";
const openai = new OpenAI();

type CallGPTProps = {
  message: string;
};

const callGPTServer = async ({ message }: CallGPTProps) => {
  // TODO: add support for multiple messages

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: message,
      },
    ],
  });

  const response = completion.choices[0].message.content;

  return response;
};

export { callGPTServer };
