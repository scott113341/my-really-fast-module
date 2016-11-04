const test = require('tape');

const addNumbers = require('../lib/add-numbers.js');

test('no arguments', t => {
  t.equal(addNumbers(), 0);
  t.end();
});

test('one number', t => {
  t.equal(addNumbers(8), 8);
  t.end();
});

test('two numbers', t => {
  t.equal(addNumbers(4, 6), 10);
  t.end();
});

test('many numbers', t => {
  const numbers = Array.from(Array(100).keys());
  t.equal(addNumbers(...numbers), 4950);
  t.end();
});
