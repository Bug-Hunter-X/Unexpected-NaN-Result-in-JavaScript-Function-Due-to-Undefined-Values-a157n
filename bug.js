function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
//This function handles null values gracefully. However, it doesn't handle undefined values which might lead to unexpected results. For instance:
console.log(foo(1, undefined)); //Output: NaN which is not desirable.