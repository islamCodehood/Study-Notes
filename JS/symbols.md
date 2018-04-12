# symbols: 
- A new JS primitive data type.(number, string, boolean, null, undefined, symbol)
- is "unique, and immutable data type that is used to identify object properties".
- created by invoking symbol() function.
- symbol('description') function can have an optional string description.
- Description is a way to describe the created symbol. It can not access the symbol or affect its value. That's why to symbols with the same description are not equal.
- syntax:
  ```
  const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);//{Symbol(apple): {…}, Symbol(banana): {…}, Symbol(orange): {…}, Symbol(banana): {…}}
```
