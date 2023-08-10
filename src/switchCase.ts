import has from 'lodash/fp/has'

export const switchCase = (cases: object) => (defaultCase: any) => (key: string) =>
  has(key, cases) ? cases[key] : defaultCase instanceof Function ? defaultCase(key) : defaultCase