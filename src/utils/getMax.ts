export const numberOfIntegersFromLength = (bits: number) => 2 ** bits

export const getMaxUnsignedIntegerFromLength = (bits: number) =>
  numberOfIntegersFromLength(bits) - 1

export const getMaxIntegerFromLength = (bits: number) =>
  getMaxUnsignedIntegerFromLength(bits - 1)
