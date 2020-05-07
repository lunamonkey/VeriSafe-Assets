import {assets} from '../index';
test('Assets is not null', () => {
	expect(assets).not.toBeNull();
	expect(assets.length).not.toBeNull();
	expect(assets.length).toBeGreaterThan(10);
});