export const switchCase = (cases: object) => (defaultCase: any) => (key: string) =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase instanceof Function ? defaultCase(key) : defaultCase