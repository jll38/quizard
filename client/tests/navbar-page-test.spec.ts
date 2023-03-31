import { test, expect } from '@playwright/test';

test('Navbar Page Test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Browse' }).click();
  await page.getByRole('link', { name: 'Create' }).click();
  await page.locator('.chakra-linkbox__overlay').click();
});