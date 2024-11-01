// Annotations are used to tell TypeScript what type of value a variable will refer to.
// examples
let num: number = 10;
let str: string = "Hello";
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let obj: { name: string; age: number } = { name: "John", age: 30 };
let func: Function = function () {
  return "Hello";
};
let nul: null = null;

// use arrow function and annotations
const add = (a: number, b: number): number => {
  return a + b;
};
