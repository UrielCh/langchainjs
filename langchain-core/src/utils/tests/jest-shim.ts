// jest-shim.ts
// Map Jest globals to Deno test equivalents
/// <reference lib="deno.ns" />

import { expect as stdExpect } from "@std/expect";
import {
  afterAll as stdAfterAll,
  afterEach as stdAfterEach,
  beforeEach as stdBeforeEach,
  beforeAll as stdBeforeAll,
  it as stdIt,
  test as stdTest,
  describe as stdDescribe,
} from "@std/testing/bdd";
// import { test, expect } from "@jest/globals";
// import { test, expect, afterEach } from "@jest/globals";

declare global {
  var test: typeof stdTest;
  var it: typeof stdIt;
  var afterEach: typeof stdAfterEach;
  var beforeEach: typeof stdBeforeEach;
  var describe: typeof stdDescribe;
  var beforeAll: typeof stdBeforeAll;
  var afterAll: typeof stdAfterAll;
   // Optionally add expect if you want type safety for your matcher
  var expect: typeof stdExpect;// typeof globalThis.expect;
}

globalThis.describe = stdDescribe;
globalThis.it = stdIt;
globalThis.afterEach = stdAfterEach;
globalThis.beforeEach = stdBeforeEach;
globalThis.test = stdTest;
globalThis.expect = stdExpect;
globalThis.beforeAll = stdBeforeAll;
globalThis.afterAll = stdAfterAll;
