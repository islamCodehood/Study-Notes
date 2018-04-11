# Default Function Parameters

In case of:
```
function sayHi (name, greeting) {
  return `${greeting} ${name}`;}
  
sayHi('Islam', 'Hi');//Hi Islam
sayHu();//Uncaught ReferenceError: sayHu is not defined at ...
```

You can write
```
function sayHi (name, greeting) {
name = (name !== undefined)? name : 'Islam';
greeting = (greeting !== undefined)? greeting : 'Hi'
  return `${greeting} ${name}`;}
  
sayHi();// Hi Islam
sayHi('Hazem', 'Hello');//Hello Hazem
```

How verbose this is!
So you can instead write
```
function sayHi (name = 'Islam', greeting = 'Hi') {
  return `${greeting} ${name}`;}
  
sayHi();// Hi Islam
sayHi('Hazem', 'Hello');//Hello Hazem
```

This is what is meant by default function parameters. Assigning a default values for function parameters in case no values are assigned when invoking the function.

  
