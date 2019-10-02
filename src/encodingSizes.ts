export type EncodingSize = {
  exponentLength: number
  mantissaLength: number
  signLength: 1
}

export const float32: EncodingSize = {
  exponentLength: 8,
  mantissaLength: 23,
  signLength: 1
}

export const double64: EncodingSize = {
  exponentLength: 11,
  mantissaLength: 52,
  signLength: 1
}