export * from "./src/core.ts";
export * from "./src/duplex.ts";
export {
  PatchError as JsonPatchError,
  _deepClone as deepClone,
  escapePathComponent,
  unescapePathComponent,
} from "./src/helpers.ts";

/**
 * Default export for backwards compat
 */

import * as core from "./src/core.ts";
import {
  PatchError as JsonPatchError,
  _deepClone as deepClone,
  escapePathComponent,
  unescapePathComponent,
} from "./src/helpers.ts";

export default {
  ...core,
  // ...duplex,
  JsonPatchError,
  deepClone,
  escapePathComponent,
  unescapePathComponent,
};
