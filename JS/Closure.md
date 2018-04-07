# Closure

### Table of Contents:
  - [Definition](https://github.com/Islam888/Study-Notes/blob/master/JS/Closure.md#definition).
  - [Example 1](https://github.com/Islam888/Study-Notes/blob/master/JS/Closure.md#example-1).
  - [Example 2](https://github.com/Islam888/Study-Notes/blob/master/JS/Closure.md#example-2).
  - [Example 3](https://github.com/Islam888/Study-Notes/blob/master/JS/Closure.md#example-3).



### Definition: 
  - Simply is a function that has a reference ( can access ) a private variable.
  

### Example 1:

  ```
  function Person(pName) {
    this.name = pName;
    }
  const me = new Person('Islam');
  me.name;//'Islam'
  ```
  Now let's do it another way
  ```
  function Person(pName) {
    var name = pName;
    }
  const me = new Person('Islam');
  me.name;//undefined
  ```
  Instead we could use a closure to have a reference to this private name variable.
  ```
  function Person(pName) {
  var name = pName;
  return function() {
    return this.name = pName;
    }
  }
 const obj = Person('Islam');
 const me = new obj();
 me.name;//'Islam'
```

### Example 2

```
function counterFunction() {
    var counter = 0;
    return function () {return counter += 1;}
}
const add = counterFunction();
add();//1
add();//2
add();//3
```
The add() refer to the returned anonymous function which has reference to the private counter variable and increment it by 1 each time the add() invoked.
If you wrote `add;` in console it will return the returned anonymous function.
```
add;//ƒ () {return counter += 1;}
```


### Example 3

```
function invokeTwice(callback) {
   callback();
   callback();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};
```
Invoking the function `invokeTwice(dog.growOneYear);//undefined` will not increment age property of the dog object. This is because _this_ inside a regular function is scoped to the global object `window` when the function is invoked.
A solution to that is using a closure function to have a refernce to age property inside the dog object and then the method can increment its value.
```
invokeTwice(function() {
dog.growOneYear()});
dog.age;//7
```
