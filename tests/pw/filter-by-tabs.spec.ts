import { test, expect } from "@playwright/test";
import { BASE_URL_VERSION, ENDPOINTS } from "../../src/config";
import { travels } from "../../src/test/mockup";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.route(`${BASE_URL_VERSION}${ENDPOINTS.TRAVELS}`, async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify(travels),
    });
  });
});

test("Should show the correct number of articles for all tab", async ({
  page,
}) => {
  await page.waitForSelector("article");
  const expectedButtons = await page
    .getByRole("button", {
      name: "See trip details",
    })
    .count();
  await expect(expectedButtons).toBe(travels.length);
});

test("Should show the correct number of articles for Upcoming tab", async ({
  page,
}) => {
  await page.waitForSelector("article");
  await page.click('button[role="tab"]:has-text("Upcoming")');
  const expectedButtons = await page
    .getByRole("button", {
      name: "See trip details",
    })
    .count();
  const expectedUpcomingCount = travels.filter(
    (travel) => travel.status === "todo"
  ).length;
  await expect(expectedButtons).toBe(expectedUpcomingCount);
});

test("Should show the correct number of articles for Completed tab", async ({
  page,
}) => {
  await page.waitForSelector("article");
  await page.click('button[role="tab"]:has-text("Completed")');
  const expectedButtons = await page
    .getByRole("button", {
      name: "See trip details",
    })
    .count();
  const expectedCompletedCount = travels.filter(
    (travel) => travel.status === "done"
  ).length;
  await expect(expectedButtons).toBe(expectedCompletedCount);
});
