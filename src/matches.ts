import { isNil } from './isNil'

export const matches = (pattern: Record<string, any>, object: Record<string, any>): boolean => {
  if (object === pattern) return true

  if (isNil(pattern) || isNil(object)) return false

  if (typeof pattern !== "object") return false

  return Object.entries(pattern).every(([key, value]) =>
    matches(value, object[key])
  )
}