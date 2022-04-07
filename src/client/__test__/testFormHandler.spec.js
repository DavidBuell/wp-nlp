/**
 * @jest-environment jsdom
 */

// import formHandler from '../js/formHandler';
const formHandler = require('../js/formHandler');

test("formHandler is defined", () => {
    expect(formHandler).toBeDefined();
});