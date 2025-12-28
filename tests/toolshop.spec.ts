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
});
