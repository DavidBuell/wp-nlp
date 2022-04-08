/**
 * @jest-environment jsdom
 */

import checkURL from '../js/checkURL';

test('checkURL should return true if url is valid', () => {
	expect(checkURL('http://www.google.com')).toBe(true);
});
