// Defining the timeout for the test
const TIMEOUT = 4000;

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
  await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'});
});

describe('Integration test of the app', () => {
  test('Have some cards initially rendered', async () => {
      const result = await page.$$('[data-componenttype="productCard"]');

      expect(result.length > 0).toBeTruthy();
  }, TIMEOUT);

  test('Seach term would filter products', async () => {
    await page.type('#header-serach', 'Grey');
    // Wait a while for filtering to work
    await page.waitForTimeout(200);

    const result = await page.$$('[data-componenttype="productCard"]');
    expect(result.length > 0).toBeTruthy();
}, TIMEOUT);
});