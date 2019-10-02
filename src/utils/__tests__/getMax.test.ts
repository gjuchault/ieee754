import test from 'ava'

import {
  numberOfIntegersFromLength,
  getMaxUnsignedIntegerFromLength,
  getMaxIntegerFromLength
} from '../getMax'

test('numberOfIntegersFromLength()', t => {
  t.is(numberOfIntegersFromLength(8), 256)
})

test('getMaxUnsignedIntegerFromLength()', t => {
  t.is(getMaxUnsignedIntegerFromLength(8), 255)
})

test('getMaxIntegerFromLength()', t => {
  t.is(getMaxIntegerFromLength(8), 127)
})
