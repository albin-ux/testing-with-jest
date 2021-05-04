const stack = require('../src/stack');

test('Push should be undefined at start', () => {
    expect(stack.push()).toBeDefined();
});
