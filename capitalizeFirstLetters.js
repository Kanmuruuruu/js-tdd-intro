const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(capitalizeFirstLetter.length, 1);

assert.strictEqual(capitalizeFirstLetter('i am a potato'), 'I Am A Potato');
assert.strictEqual(capitalizeFirstLetter ('z'), 'Z');a
assert.strictEqual(capitalizeFirstLetter('pouet'), 'Pouet');
assert.strictEqual(capitalizeFirstLetter(''), '');