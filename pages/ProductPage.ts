import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async openStore() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async addToolToCart() {
    await this.page.locator('.card').first().click();
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
  }
}
