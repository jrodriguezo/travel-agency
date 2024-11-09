import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("Should display only one h2 with Portugal when input is filled", async ({
  page,
}) => {
  await page.fill('input[placeholder="Search trips"]', "Portugal");
  await page.click('button:has-text("Search")');

  await page.waitForSelector('h2:has-text("Portugal")');

  const h2Locator = await page.getByRole("heading", { name: "Portugal" });

  await expect(h2Locator).toContainText("Portugal");
});
