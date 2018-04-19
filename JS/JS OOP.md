# JS OOP 

JS Object-Oriented Programing at Udacity. A part of Udacity Front end Nanodegree courses.

Course lessons:

1. [Objects In Depth](#objects-in-depth).
2. [Functions at runtime](#functions-at-runtime).
3. [Classes and Objects](#classes-and-objects).

## 1. Objects in Depth

### Introduction

- Object Definition:  a collection of associated unordered (opposite to arrays) key/value pairs. It is defined with curly brackets `{}`. Key/value pairs are called properties. And they (key/value) are connected using colon `:` and properties separated from each other using comma `,` .

- Syntax: 
const course = { courseId: 711 }; 
const course = { 'courseId': 711 }; 
const course = { "courseId": 711 };

As you see the key string can be with or without quotes. Mostly without quotes but are essential in certain cases: 
- reserved word (e.g., for, if, let, true, etc.).
- Contains spaces or special characters that cannot appear in a variable name.

- Accessing object properties values:

  - Using `dot notation` : `course.courseId;`
  Limitations:
  1. When the key is a number.
  2. When the key is stored in a variable and we want to access this property by the variable.
  - Using `bracket notation` : `course['courseId'];`
  
- Accessing nested object properties values:

```
const bicycle = {
  color: 'blue',
  type: 'mountain bike',
  wheels: {
    diameter: 18,
    width: 8
  }
};

bicycle.wheels.width;
```


### Creating and modifying objects

- [A link to the course page](https://classroom.udacity.com/nanodegrees/nd001/parts/4942f4d7-a48d-4794-9eb0-404b3ed3cfe1/modules/7e56389b-50d8-4e3a-84a0-eb3fd45456b2/lessons/504843ae-ba16-4573-a859-94da7a7d1dd4/concepts/2bbcfed5-e683-431b-ace2-b67c091400d2).
- Create: 
```
// Using literal notation:
const myObject = {};

// Using the Object() constructor function (slower):
const myObject = new Object();

//Using constructor function:
function MyObjectConstructor() {
  }
const myObject = new MyObjectConstructor();
```

- Modifying object properties
```
const cat = {
  age: 2,
  name: 'Bailey'
}
cat.age += 1;

cat.age;
// 3

cat.name = 'Bambi';

cat.name;
// 'Bambi'
```

- Adding Object properties
```
const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer.print = function () {
  console.log('The printer is printing!');
};
```

- Removing Object properties
```
delete printer.mode;
// true
```

- Since Objects are passed by reference, making changes to an original object make the same change to its copy
```
const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15
};

const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard;
// 15

iceCreamCopy.Richard = 99;

iceCreamCopy.Richard;
// 99

iceCreamOriginal.Richard;
// 99
```

- Comparing an Object with Another Object

```
const object1 = {
  name: bird}
const object2 = {
  name: bird}
object1 === object2;//false

const object = object1;
object;//{name: bird}

object === object1;//true. Also any change in object1 will make the same change in object.
object === object2;//false.
```
### Invoke object method

- invoke methods different ways

```
const developer = {
  sayHello: function () {
    console.log('Hi there!');
  }
};
developer.sayHello();//Hi there!
developer['sayHello']();//Hi there!
```

- passing arguments into methods

```
const developer = {
  name: 'Andrew',
  favoriteLanguage: function (language) {
    console.log(`My name is ${this.name} and my favorite programming language is ${language}.`);
  }
};

developer.favoriteLanguage('JavaScript');//My name is Andrew and my favorite programming language is JavaScript.
```
- Naming properties functions ( rather than using anonymous functions) is valis and is useful for debugging.

