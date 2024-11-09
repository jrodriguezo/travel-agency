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

test("Can delete a trip", async ({ page }) => {
  await page.waitForSelector("article");
  await page.getByRole("button", { name: "Delete" }).first().click();
  const remainingTrips = await page.locator("article").count();

  await expect(remainingTrips).toBe(travels.length - 1);
});

test("Can delete all trips", async ({ page }) => {
  await page.waitForSelector("article");
  //eslint-disable-next-line
  for (const _ of travels) {
    await page.getByRole("button", { name: "Delete" }).first().click();
  }
  const remainingTrips = await page.locator("article").count();

  await expect(remainingTrips).toBe(0);
});
