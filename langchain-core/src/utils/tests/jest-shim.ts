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
import {
  assertSpyCall as stdAssertSpyCall,
  assertSpyCalls as stdAssertSpyCalls,
  spy,
} from "@std/testing/mock";

declare global {
  var test: typeof stdTest;
  var it: typeof stdIt;
  var afterEach: typeof stdAfterEach;
  var beforeEach: typeof stdBeforeEach;
  var describe: typeof stdDescribe;
  var beforeAll: typeof stdBeforeAll;
  var afterAll: typeof stdAfterAll;
  var expect: typeof stdExpect;
  var assertSpyCall: typeof stdAssertSpyCall;
  var assertSpyCalls: typeof stdAssertSpyCalls;
  var mockGlobalFunction: (functionName: string, fnc: any) => void;
  var restoreGlobal: () => void;
  var jest: {
    clearAllMocks: () => void;
  }
}

globalThis.describe = stdDescribe;
globalThis.it = stdIt;
globalThis.afterEach = stdAfterEach;
globalThis.beforeEach = stdBeforeEach;
globalThis.test = stdTest;
globalThis.expect = stdExpect;
globalThis.beforeAll = stdBeforeAll;
globalThis.afterAll = stdAfterAll;
globalThis.assertSpyCall = stdAssertSpyCall;
globalThis.assertSpyCalls = stdAssertSpyCalls;

let cachedFnc: Record<string, any> = {};

globalThis.mockGlobalFunction = function mockGlobalFunction(functionName: string, fnc: any): void {
  const originalFunction = (globalThis as any)[functionName];
  if (!cachedFnc[functionName]) {
    cachedFnc[functionName] = originalFunction;
  }
  (globalThis as any)[functionName] = spy(fnc);
}

// globalThis.restoreGlobal = 

globalThis.jest = {
  clearAllMocks: function (): void {
    for (const [key, value] of Object.entries(cachedFnc)) {
      (globalThis as any)[key] = value;
    }
    cachedFnc = {};
  }
}

