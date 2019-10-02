import { BinaryArray, binaryArrayToNumber } from './utils/binaryArray'
import { float32 } from './encodingSizes'
import { getMaxIntegerFromLength, numberOfIntegersFromLength, getMaxUnsignedIntegerFromLength } from './utils/getMax'

export const decode = (
  n: BinaryArray,
  { exponentLength, mantissaLength, signLength } = float32
): number => {
  const sign = binaryArrayToNumber(n.slice(0, signLength))
  const exponent = binaryArrayToNumber(n.slice(signLength, signLength + exponentLength))
  const mantissa = binaryArrayToNumber(n.slice(signLength + exponentLength))

  const percentage = mantissa / numberOfIntegersFromLength(mantissaLength)

  // edge case: zero and -zero
  if (exponent === 0 && mantissa === 0) return (-1) ** sign * 0

  // edge case: infinity and -infinity
  if (exponent === getMaxUnsignedIntegerFromLength(exponentLength)) {
    if (mantissa === 0) return (-1) ** sign * Infinity
    
    // edge case: NaN
    return NaN
  }

  // edge case: denormalized number
  if (exponent === 0) {
    return (
      (-1) ** sign *
      percentage *
      2 ** (getMaxIntegerFromLength(exponentLength) + 1)
    )
  }

  return (
    (-1) ** sign *
    (1 + percentage) *
    2 ** (exponent - getMaxIntegerFromLength(exponentLength))
  )
}
