import { expect, test } from "vitest";
import { filterTab } from "@/utils/filter-tabs/filter-tabs";
import { travels } from "@/test/mockup.js";
import { StatusEnum } from "@/constants/tabs.js";

test("Filter done travels", () => {
  expect(filterTab(StatusEnum.DONE, travels).length).toBe(2);
});

test("Filter todo travels", () => {
  expect(filterTab(StatusEnum.TODO, travels).length).toBe(5);
});

test("No travels fetched", () => {
  expect(filterTab(StatusEnum.TODO, []).length).toBe(0);
});

test("Show all travels fetched", () => {
  expect(filterTab(StatusEnum.ALL, travels).length).toBe(7);
});
