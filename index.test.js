const { add } = require('./index');

test('adds 10 + 20', () => {
  expect(add(10, 20)).toBe(40);
});
