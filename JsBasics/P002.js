// launch URL

import { test } from '@playwright/test';

test('Launch URL', async ({ page }) => {
    await page.goto('https://www.google.com');

    console.log('URL launched successfully');
});