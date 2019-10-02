import test from 'ava'

import { encode } from '../encode'

test('encode()', t => {
  t.deepEqual(encode(12.45), [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1
  ])
})
