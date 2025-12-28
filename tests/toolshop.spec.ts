import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test.describe('Toolshop Functional Tests', () => {

  test('TC-01: Add item to cart and check badge', async ({ page }) => {
    const products = new ProductPage(page);
    await products.openStore();
    await products.addToolToCart();
    await expect(page.locator('.badge')).toHaveText('1');
  });

  test('TC-02: Negative - Login fails with no data', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.alert-danger')).toBeVisible();
  });

  test('TC-03: Verify navigation to contact page', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/.*contact/);
  });

  test('TC-04: Password field validation', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/register');
    await page.getByPlaceholder('Password').fill('12');
    await page.keyboard.press('Tab');
    await expect(page.locator('.invalid-feedback')).toBeVisible();
  });

  test('TC-05: Brand filter updates product list', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByLabel('ForgeFlex').check();
    await expect(page.locator('.card-title').first()).toContainText('ForgeFlex');
  });

});
