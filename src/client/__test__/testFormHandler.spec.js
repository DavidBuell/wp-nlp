/**
 * @jest-environment jsdom
 */

// import formHandler from '../js/formHandler';
import formHandler from '../js/formHandler';

test('formHandler is defined', () => {
	expect(formHandler).toBeDefined();
});
