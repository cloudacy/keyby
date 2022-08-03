import { test, expect } from "vitest";
import keyBy, { keyByFunction } from "../src/keyby";

test("basic functionality", async () => {
  const array = [
    { id: 3, name: "Hello" },
    { id: 5, name: "World" },
    { id: 1, name: "Vitest" },
  ];

  const keyedArray = keyBy(array, "id");

  expect(keyedArray).toBeTypeOf("object");
  expect(keyedArray[3]).toBeDefined();
  expect(keyedArray[3]["name"]).toEqual("Hello");
});

test("key by function", async () => {
  const array = [
    { id: 3, name: "Hello" },
    { id: 5, name: "World" },
    { id: 1, name: "Vitest" },
  ];

  const keyedArray = keyByFunction(array, (a) => `${a.id}-${a.name}`);

  expect(keyedArray).toBeTypeOf("object");
  expect(keyedArray["3-Hello"]).toBeDefined();
  expect(keyedArray["3-Hello"]["name"]).toEqual("Hello");
});
