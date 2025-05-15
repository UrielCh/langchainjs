import { checkNotebookTypeErrors } from "./check_notebook_type_errors.ts";
import { checkUnexpectedRebuildError } from "./check_unexpected_rebuild_timer.ts";

async function main() {
  await Promise.all([checkNotebookTypeErrors(), checkUnexpectedRebuildError()]);
}

try {
  void main();
} catch {
  process.exit(1);
}
