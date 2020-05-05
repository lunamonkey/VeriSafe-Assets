import assets from '../index';
test('Assets has length greater than 10', () => {
  expect(assets.length).toBeGreaterThan(10);
});