import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("junta classes simples", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("ignora valores falsy (condicional)", () => {
    expect(cn("a", false && "b", undefined, null, "c")).toBe("a c");
  });

  it("resolve conflitos do tailwind mantendo a ultima classe", () => {
    // tailwind-merge: px-4 deve sobrescrever px-2
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("aceita arrays e objetos (clsx)", () => {
    expect(cn(["a", "b"], { c: true, d: false })).toBe("a b c");
  });
});
