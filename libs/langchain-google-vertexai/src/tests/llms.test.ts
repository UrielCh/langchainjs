/* eslint-disable no-process-env */
import { test, expect } from "@jest/globals";
import { VertexAI } from "../llms.ts";

test("Serialization", () => {
  const model = new VertexAI();
  expect(JSON.stringify(model)).toEqual(
    `{"lc":1,"type":"constructor","id":["langchain","llms","vertexai","VertexAI"],"kwargs":{"platform_type":"gcp"}}`
  );
});
