function foo(a, b) {
  // Handle null or undefined values using the || operator for a more concise solution.
  a = a === null || a === undefined ? 0 : a; // If a is null or undefined set a to 0
  b = b === null || b === undefined ? 0 : b; // If b is null or undefined set b to 0
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); //Output: 0