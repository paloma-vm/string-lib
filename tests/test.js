/* eslint-env jest */ // this is for eslint to recognize the jest keywords

const lib = require('../src/index');

test('test capitalize', () => {
  expect(lib.capitalize('hello')).toBe('Hello');
});

test('test allCaps', () => {
  expect(lib.allCaps('hello world')).toBe('HELLO WORLD');
});

test('test capitalizeWords', () => {
  expect(lib.capitalizeWords('do all the things')).toBe('Do All The Things');
});

test('test removeExtraSpaces', () => {
  expect(lib.removeExtraSpaces('  Hello   World   ')).toBe('Hello World');
});

test('test kebabCase', () => {
  expect(lib.kebabCase('Hello World')).toBe('hello-world');
});

test('test snakeOrKebabCase', () => {
  expect(lib.snakeOrKebabCase('Hello World', '_')).toBe('hello_world');
  expect(lib.snakeOrKebabCase('  what the   heck  ', '_')).toBe('what_the_heck');
});

test('test camelCase', () => {
  expect(lib.camelCase('Hello World')).toBe('helloWorld');
});

test('test shift', () => {
  expect(lib.shift('Hello World')).toBe('ello WorldH');
});

test('test makeHashTag', () => {
  expect(lib.makeHashTag('Amazing bongo drums for sale')).toStrictEqual(['#amazing', '#bongo', '#drums']);
});

test('test isEmpty', () => {
  expect(lib.isEmpty('ABC def')).toBe(false);
  expect(lib.isEmpty('          ')).toBe(true);
});
