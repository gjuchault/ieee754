import test from 'ava'

import { decode } from '../decode'
import { encode } from '../encode'
import { double64, float32 } from '../encodingSizes'

test('decode()', t => {
  const result = decode(encode(12.45))
  const result64 = decode(encode(12.45, double64), double64)
  const positiveZero = decode([
    0,
    ...Array(float32.exponentLength).fill(0),
    ...Array(float32.mantissaLength).fill(0)
  ])
  const negativeZero = decode([
    1,
    ...Array(float32.exponentLength).fill(0),
    ...Array(float32.mantissaLength).fill(0)
  ])
  const positiveInfinity = decode([
    0,
    ...Array(float32.exponentLength).fill(1),
    ...Array(float32.mantissaLength).fill(0)
  ])
  const negativeInfinity = decode([
    1,
    ...Array(float32.exponentLength).fill(1),
    ...Array(float32.mantissaLength).fill(0)
  ])
  const nan = decode([
    0,
    ...Array(float32.exponentLength).fill(1),
    ...Array(float32.mantissaLength).fill(1)
  ])
  const denormalized = decode([
    0,
    ...Array(float32.exponentLength).fill(0),
    ...Array(float32.mantissaLength).fill(1)
  ])

  t.is(result > 12.4499 && result < 12.5001, true)
  t.is(result64 > 12.4499 && result64 < 12.5001, true)
  t.is(positiveZero, 0)
  t.is(negativeZero, -0)
  t.is(positiveInfinity, Infinity)
  t.is(negativeInfinity, -Infinity)
  t.is(isNaN(nan), true)
  t.is(denormalized > 0 && denormalized < 10 ** -30, true)
})