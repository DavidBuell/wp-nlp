/**
 * @jest-environment jsdom
 */

const checkURL = require('../js/checkURL');

test('checkURL should return true if url is valid', () => {
    expect(checkURL('http://www.google.com')).toBe(true);
});