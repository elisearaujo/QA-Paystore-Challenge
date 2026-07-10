import { test, expect } from '@playwright/test';

test('Validar seção História do site Phoebus', async ({ page }) => {

  test.setTimeout(60000);

  await page.goto('https://www.phoebus.com.br/', {
    waitUntil: 'networkidle'
  });

  await page.getByRole('link', { name: 'HISTÓRIA', exact: true }).click();

  await page.waitForTimeout(3000);

  // 1997
  await page.getByRole('button', { name: '1997' }).click();
  await expect(page.getByText('A Phoebus nasceu dentro da')).toBeVisible();

  await page.screenshot({
    path: 'screenshots/1997.png'
});

await test.info().attach('1997', {
    path: 'screenshots/1997.png',
    contentType: 'image/png'
});

  await page.waitForTimeout(3000);

  // 2015
  await page.getByRole('button', { name: '2015' }).click();
  await expect(page.getByText('A Phoebus consolida-se no')).toBeVisible();

  await page.screenshot({
    path: 'screenshots/2015.png'
});

await test.info().attach('2015', {
    path: 'screenshots/2015.png',
    contentType: 'image/png'
});

  await page.waitForTimeout(2000);

  // 2020
  await page.getByRole('button', { name: '2020' }).click();
  await expect(page.getByText('A Phoebus amplia certificaçõ')).toBeVisible();

  await page.screenshot({
    path: 'screenshots/2020.png'
});

await test.info().attach('2020', {
    path: 'screenshots/2020.png',
    contentType: 'image/png'
});

  // Espera 3 segundos antes de fechar o navegador
  await page.waitForTimeout(3000);

});