import "@/jest-shim";
import { RunnableLambda } from "../runnables/base.ts";
import { getContextVariable, setContextVariable } from "../context.ts";

test("Getting and setting context variables within nested runnables", async () => {
  const nested = RunnableLambda.from(() => {
    expect(getContextVariable("foo")).toEqual("bar");
    expect(getContextVariable("toplevel")).toEqual(9);
    setContextVariable("foo", "baz");
    return getContextVariable("foo");
  });
  const runnable = RunnableLambda.from(async () => {
    setContextVariable("foo", "bar");
    expect(getContextVariable("foo")).toEqual("bar");
    expect(getContextVariable("toplevel")).toEqual(9);
    const res = await nested.invoke({});
    expect(getContextVariable("foo")).toEqual("bar");
    return res;
  });
  expect(getContextVariable("foo")).toEqual(undefined);
  setContextVariable("toplevel", 9);
  expect(getContextVariable("toplevel")).toEqual(9);
  const result = await runnable.invoke({});
  expect(getContextVariable("toplevel")).toEqual(9);
  expect(result).toEqual("baz");
});
