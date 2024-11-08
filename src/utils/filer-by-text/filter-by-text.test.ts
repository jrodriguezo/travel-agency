import { expect, test } from "vitest";
import { travels } from "@/test/mockup.ts";
import { filterByText } from "@/utils/filer-by-text/filter-by-text";

test("Filter title by nothing", () => {
  expect(filterByText("", travels).length).toBe(travels.length);
});

test("Filter title by country in uppercase", () => {
  expect(filterByText("PORTUGAL", travels).length).toBe(1);
});

test("Filter wrong title by country in uppercase", () => {
  expect(filterByText("POTUGAL", travels).length).toBe(0);
});

test("Filter description by volcanic in uppercase", () => {
  expect(filterByText("VOLCANIC", travels).length).toBe(1);
});
