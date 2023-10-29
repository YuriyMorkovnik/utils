type DeepObject = Record<string, any>

export const mergeDeep = (target: DeepObject, source: DeepObject): DeepObject =>
  Object.keys(source).reduce((acc, key) => {
    const sourceValue = source[key]
    if (typeof sourceValue === 'object' && sourceValue !== null) {
      acc[key] = mergeDeep(acc[key] || {}, sourceValue)
    } else {
      acc[key] = sourceValue
    }
    return acc
  }, { ...target })