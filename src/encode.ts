import { float32 } from './encodingSizes'
import { createBinaryArray, setInBinaryArray } from './utils/binaryArray'
import {
  getMaxIntegerFromLength,
  numberOfIntegersFromLength
} from './utils/getMax'
import { getPreviousPowerOfTwo } from './utils/getPreviousPowerOfTwo'

export const encode = (
  n: number,
  { exponentLength, mantissaLength, signLength } = float32
) => {
  let view = createBinaryArray(exponentLength + mantissaLength + signLength)

  const absN = Math.abs(n)

  // first part: sign
  const sign = Math.sign(1 / n) === -1 ? 1 : 0
  view = setInBinaryArray(view, 0, sign)

  const exponent = getPreviousPowerOfTwo(absN)
  const lowerRange = 2 ** exponent
  const upperRange = 2 ** (exponent + 1)

  // convert to signed integer (as the exponent can be negative)
  const shiftedExponent = exponent + getMaxIntegerFromLength(exponentLength)
  view = setInBinaryArray(view, 1, shiftedExponent)

  const percentage = (absN - lowerRange) / (upperRange - lowerRange)

  const mantissa = Math.round(
    numberOfIntegersFromLength(mantissaLength) * percentage
  )
  view = setInBinaryArray(view, signLength + exponentLength, mantissa)

  return view
}
