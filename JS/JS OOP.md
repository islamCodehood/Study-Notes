# OOP

JS Object-Oriented Programing at Udacity. A part of Udacity Fri=ont end Nanodegree courses.

Course lessons:

1. [Object In Depth](#objects-in-depth).
2. [Functions at runtime](#functions-at-runtime).
3. [Classes and Objects](#classes-and-objects).

## Objects in Depth

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






