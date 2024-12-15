function foo(x){
  if(x===null)return "null";
  if(x===undefined)return "undefined";
  return x.toString();
}
console.log(foo(null)); //Output: null
console.log(foo(undefined)); //Output: undefined
console.log(foo(1)); //Output: 1
console.log(foo(true)); //Output: true
console.log(foo(Symbol("foo"))); //Output: TypeError: Cannot convert a Symbol value to a string