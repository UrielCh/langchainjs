import "@/jest-shim";
import { Client } from "langsmith";
import { LangChainTracer } from "../../tracers/tracer_langchain.ts";
import {
  BaseOutputParser,
  type FormatInstructionsOptions,
} from "../../output_parsers/base.ts";
import { FakeChatModel } from "../../utils/testing/index.ts";
import { getEnvironmentVariable } from "../../utils/env.ts";

class FakeDateOutputParser extends BaseOutputParser<Date> {
  lc_namespace = ["langchain_core", "output_parsers", "testing"];

  async parse(_text: string): Promise<Date> {
    return new Date();
  }

  getFormatInstructions(_options?: FormatInstructionsOptions): string {
    return "";
  }
}

test.skip("Should handle tracing with a date output", async () => {
  const client = new Client({
    apiUrl: getEnvironmentVariable("LANGCHAIN_ENDPOINT"),
    apiKey: getEnvironmentVariable("LANGCHAIN_API_KEY"),
  });

  const tracer = new LangChainTracer({
    projectName: getEnvironmentVariable("LANGCHAIN_SESSION"),
    client,
  });
  const model = new FakeChatModel({});
  const parser = new FakeDateOutputParser();
  const chain = model.pipe(parser);
  const result = await chain.invoke("test", { callbacks: [tracer] });
  console.log(result);
});

// TODO