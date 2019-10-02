import test from 'ava'

import {
  createBinaryArray,
  numberToBinaryArray,
  setInBinaryArray,
  BinaryArray,
  binaryArrayToNumber
} from '../binaryArray'

test('createBinaryArray()', t => {
  const binaryArray = createBinaryArray(10)

  t.is(binaryArray.length, 10)
  t.is(binaryArray[0], 0)
})

test('numberToBinaryArray()', t => {
  t.deepEqual(numberToBinaryArray(10), [1, 0, 1, 0])
  t.deepEqual(numberToBinaryArray(10, 5), [0, 1, 0, 1, 0])
})

test('binaryArrayToNumber()', t => {
  t.deepEqual(binaryArrayToNumber([1, 0, 1, 0]), 10)
})

test('setInBinaryArray()', t => {
  const baseArray = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0] as BinaryArray

  t.deepEqual(setInBinaryArray(baseArray, 0, 0), [0, 0, 1, 0, 1, 0, 1, 0, 1, 0])

  t.deepEqual(setInBinaryArray(baseArray, 3, 10), [
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    0
  ])
})
