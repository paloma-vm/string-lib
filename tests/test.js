const lib = require('../src/index.js')

test('Sanity check', () => {
    expect(2+2).toBe(4)
})

test('test capitalize', () => {
    expect(lib.capitalize('hello')).toBe('Hello')
})

test('test allCaps', () => {
    expect(lib.allCaps('hello world')).toBe('HELLO WORLD')
})
// remember to check coverage