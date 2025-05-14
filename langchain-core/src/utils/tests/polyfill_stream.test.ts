import "web-streams-polyfill/polyfill";
import "@/jest-shim";
import { FakeStreamingLLM } from "../testing/index.ts";
import { StringOutputParser } from "../../output_parsers/string.ts";

test("Stream the entire way through", async () => {
  const llm = new FakeStreamingLLM({});
  const stream = await llm.pipe(new StringOutputParser()).stream("Hi there!");
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
    console.log(chunk);
  }
  expect(chunks.length).toEqual("Hi there!".length);
  expect(chunks.join("")).toEqual("Hi there!");
});
