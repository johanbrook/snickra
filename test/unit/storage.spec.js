const test = require('tape');

test('setup', (t) => {
  console.log('Before');
  t.end();
});

test('Should be true', (t) => {
  t.ok(true, 'is true');
  t.end();
});
