import "@/jest-shim";
import { Document } from "../document.ts";

describe("Document", () => {
  test("Constructing a document with an empty sting", async () => {
    const doc = new Document({ pageContent: "" });
    expect(doc.pageContent).toEqual("");
  });

  test("Constructing a document with an undefined at runtime", async () => {
    const pageContent = undefined as unknown as string;
    const doc = new Document({ pageContent });
    expect(doc.pageContent).toEqual("");
  });
});
