import { test, expect } from '@playwright/test';

test('Quiz Creation: No Input Test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/create');
  await page.getByRole('button', { name: 'Next' }).click();
  const locate = page.locator('#field-\\:r5\\:-helptext');
  expect(await locate.count()).toEqual(2);
});
