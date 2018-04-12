# ES6 Functions

## Table of contents:
- [Introduction](#introduction).
- [Arrow Functions](#arrow-functions).
- [Arrow Functions and this key word]().
- [Default Function Parameter]().
- [Destructuring with Default Function Parameters]().
- [JS Classes]().
- [Subclasses with extends, and super]().

## Introduction:

ES6 has changed how we write _**functions**_, adding _**default parameters**_ and introduced a new way of presenting _**classes and subclasses**_. All for being more easier syntax.


## Arrow Functions`=>`:

1. They are similar to regular functions in behavior, but are quite different _**syntactically**_. 
2. Its full name is "**_Arrow Function Expressions_**". So they can be ONLY :heavy_check_mark: a **function expression** NOT :x: function declaration.
3. This includes being: 
  - variable stored.
  - passed as an argument to a function.
  - stored in an object's property.
4. **Syntax:**
  - One parameter.
  ```
  //Regular Function
  const greet = function(name) { return `Hello ${name}!`};
    
  //Arrow Function
  const greet = name => `Hello ${name}!`;
  ```
  - No parameter.
   ```
  //Regular Function
  const greet = function() { return `Hello student!`};
    
  //Arrow Function
  const greet = () => `Hello student!`;
  //Or
  const greet = _ => `Hello student!`;
  ```
  - More Than one parameter.
   ```
  //Regular Function
  const greet = function(name1, name2) { return `Hello ${name1} and ${name2}!`};
    
  //Arrow Function
  const greet = (name1, name2) => `Hello ${name1} and ${name2}!`;
  ```
5. **Concise body syntax:**
  - The function body contain one line of code ( which is a returned value).
  - No need to add `return` key word.
  - No :x: curly braces `{}` needed.
  `const greet = () => `Hello student!`;`
6. **Block body syntax:**
  - The function body contain more than one line of code.
  - If you want to return a specific value you would have to add `return` key word by yourself.
  - Need curly braces `{}`.
  ```
  const func1 = (x, y) =>  {x++; return x + y;}; 
  //don't want to return a specific value
  const func2 = (x, y) =>  {x++; console.log(x + y);}; 
  //this last one return undefined when invoking function.
  const func3 = (x, y) =>  {x++;  x + y;}; 
  ```
  
  
