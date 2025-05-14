import "@/jest-shim";
import { Document } from "../documents/document.ts";

test("Document should handle empty pageContent", () => {
  const doc = new Document({ pageContent: "" });
  expect(doc.pageContent).toEqual("");
});
