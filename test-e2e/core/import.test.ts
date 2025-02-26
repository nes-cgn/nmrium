import { test, expect } from '@playwright/test';

import NmriumPage from '../NmriumPage';

test('should load and migrate .nmrium data from version 0 to latest version', async ({
  page,
}) => {
  const nmrium = await NmriumPage.create(page);
  await nmrium.page.setInputFiles(
    'data-test-id=dropzone-input',
    'test-e2e/data/1h-version-0.nmrium',
  );
  // If the file was loaded successfully, there should be a 1H,1H tab.
  await expect(
    nmrium.page.locator('_react=InternalTab[tabid = "1H,1H"]'),
  ).toBeVisible();
});

test('should load and migrate .nmrium data from version 1 to latest version', async ({
  page,
}) => {
  const nmrium = await NmriumPage.create(page);
  await nmrium.page.setInputFiles(
    'data-test-id=dropzone-input',
    'test-e2e/data/1h-version-1-datasource.nmrium',
  );
  // If the file was loaded successfully, there should be a 1H,1H tab.
  await expect(
    nmrium.page.locator('_react=InternalTab[tabid = "1H,1H"]'),
  ).toBeVisible();
});
