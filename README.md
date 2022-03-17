# keyby

A typescript implementation of keyby method, inspired by lodash.keyby

## Usage

```ts
const arr = [
  { id: 3, name: "Hello" },
  { id: 5, name: "World" },
  { id: 1, name: "keyby" },
];

const keyedArray = keyBy(array, "id");

console.log(keyedArray);
// => {3: {id: 3, name: "Hello"}, 5: {id: 5, name: "World"}, 1: {id: 1, name: "keyby"}}
```
