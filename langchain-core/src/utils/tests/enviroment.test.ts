import { test, expect } from "@jest/globals";
import { getRuntimeEnvironment } from "../env.ts";

test("test getRuntimeEnvironment", async () => {
  const runtimeEnvironment = await getRuntimeEnvironment();
  console.log(runtimeEnvironment);
  expect(runtimeEnvironment.runtime).toEqual("node");
});
