import { mergeDeep } from "./mergeDeep"

type DeepObject = Record<string, any>

export const mergeDeepRightAll = (objects: DeepObject[]): DeepObject =>
  objects.reduce((acc, obj) => mergeDeep(acc, obj), {})