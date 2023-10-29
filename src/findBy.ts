import { matches } from "./matches"

type Pattern = Record<string, any>

export const findBy = (pattern: Pattern, array: Pattern[]): Pattern | undefined => {
  return array.find(item => matches(pattern, item))
}
