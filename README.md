# Utils

A lightweight set of fast and useful utils without any dependencies

## asyncMap

```js
const array = [1, 2, 3, 4]
const asyncCallback = async (item) => {
  return await someAsyncOperation(item)
}

await asyncMap(array, asyncCallback)

```

## mergeDeepRightAll

```js
const obj1: DeepObject = { a: 1, b: { c: 2 } }
const obj2: DeepObject = { b: { d: 3 }, e: 4 }
const obj3: DeepObject = { f: 5 }

const merged: DeepObject = mergeDeepRightAll([obj1, obj2, obj3])
console.log(merged) // { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }


```

## mergeDeepRightAll

```js
const cases = {
  'case1': 'Value for case 1',
  'case2': 'Value for case 2',
}

const defaultCase = 'Default value'

const switchFn = switchCase(cases)(defaultCase)
console.log(switchFn('case1')) // 'Value for case 1'
console.log(switchFn('case3')) // 'Default value'

```

## matches

```js
const pattern = { b: { c: 2 } }
const object = { a: 1, b: { c: 2 }, d: { e: 3 } }

const isMatch = matches(pattern, object)
console.log(isMatch) // true
```