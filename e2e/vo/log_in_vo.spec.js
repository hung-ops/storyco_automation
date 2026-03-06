import { test, expect } from '@playwright/test';

import * as element from '../../elements';

test('test', async ({ page }) => {
  await page.goto('https://vo.story.co/');
  await expect(element.SignInModal(page).headings.signIn).toBeVisible({ timeout: 60000 });
  await element.SignInModal(page).emailInput.click()
  await element.SignInModal(page).emailInput.fill((process.env.user_name));
  await element.SignInModal(page).continueBtn.click();
  await expect(element.SignInModal(page).passwordInput).toBeVisible({ timeout: 60000 });
  await element.SignInModal(page).passwordInput.fill(process.env.password);
  await element.SignInModal(page).continueBtn.click();
  await Promise.all([
  expect(element.SignInModal(page).headings.storyCoVo).toBeVisible({ timeout: 60000 }),
  expect(element.SignInModal(page).headings.sessions).toBeVisible({ timeout: 60000 })
  ]);
});