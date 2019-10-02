export type BinaryArray = Array<0 | 1 | Boolean>

export const createBinaryArray = (length: number): BinaryArray =>
  Array(length).fill(0)

export const numberToBinaryArray = (n: number, minLength: number = null) => {
  const result = n
    .toString(2)
    .split('')
    .map(char => (char === '1' ? 1 : 0))

  return minLength
    ? Array(minLength - result.length)
        .fill(0)
        .concat(result)
    : result
}

export const binaryArrayToNumber = (array: BinaryArray) =>
  parseInt(array.join(''), 2)

export const setInBinaryArray = (
  binaryArray: BinaryArray,
  index: number,
  n: number
): BinaryArray => {
  const nAsBinaryArray = numberToBinaryArray(n)

  return [
    ...binaryArray.slice(0, index),
    ...nAsBinaryArray,
    ...binaryArray.slice(index + nAsBinaryArray.length)
  ]
}
