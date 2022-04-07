/**
 * @jest-environment jsdom
*/

const checkURL = require('../client/js/checkURL');

test('checkURL should return true if url is valid', () => {
    expect(checkURL('http://www.google.com')).toBe(true);
});