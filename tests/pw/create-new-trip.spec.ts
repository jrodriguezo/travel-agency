import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("Can create a new trip", async ({ page }) => {
  await page.getByRole("button", { name: "Create a new trip" }).click();
  const modalTitleLocator = page.getByRole("heading", {
    name: "Create a trip",
  });
  await expect(modalTitleLocator).toHaveText("Create a trip");
});
