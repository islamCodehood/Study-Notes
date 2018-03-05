# **ES6 COURSE**

## **Names :**
- **ES6**
- **ES2015**
- **Harmony**

-----------------------------------------------------------------------------------------

## **let and const :**
- **Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function.**
- **Variables declared with var are either scoped globally or locally the function scope.**
- **Rules for using let and const :**
    - Variables declared with **_let_**:
    
                                         - [ ] can be reassigned.                    
                                         - [ ] can't be redeclared in the same scope. 
    - Variables declared with **_const_**:
    
                                         - [ ] must be assigned an initial value.
                                         - [ ] can't be reassigned.
                                         - [ ] can't be redeclared in the same scope.

- **Use Cases (when to use what) :**
    - **_let_**  when you plan to `reassign` new values to a variable.
    - **_const_**  when you _don’t_ plan on reassigning new values to a variable.
    
**As a general rule _always_ declare your variables using `const` except if you plan to reassign new values to variable.**

**It is a _GOOD PRACTICE_ to not using `var` any more.**

----------------------------------------------------------------------------------------

## **Template Literals :**

**string literals that include embedded expressions.**

### Syntax:

- Single line string (with embeded expressions or _expression interpolation_)
```
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`; //Richard Kalehoff please //see Mrs. Wilson in N231 to pick up your report card.
```
```
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and not 20."
```
- Multi-line string.

instead of:
```
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```
you can write this:
```
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```


-----------------------------------------------------------------------------

## **Destructuring**

**Extract data from arrays and objects into different variables.**
**allow you to specify the elements you want to extract from an array or object on the left side of an assignment.**

### **Arrays**

- **Instead of :**

```
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z); //10 25 -34
```

- **You can do this:**

```
const point = [10, 25, -34];
const [x, y, z] = point;

console.log(x, y, z); //10 25 -34
```

### **Objects**

- **Instead of:**

```
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat); ////quartz rose 21.29
```

- **You can do this:**

```
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};
const {type, color, carat} = gemstone;
console.log(type, color, carat); //quartz rose 21.29
```
**achieve the same result as before, but with much _less code_; and it's still easy to _understand_.**


--------------------------------

## **Object literal shorthand**

### **initializing objects**

If the properties names are the same like values names assigned to them, then ni=o need to re-write the same name as the value of property.

   - **Instead of that:**
   
   ```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
```

   - **You can write that:**
   
   ```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat
};

console.log(gemstone);
```

### **methods names shorthand**

**Since _anonymous function_ is being assigned to a property.**

- **Instead of that:**


```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    //code here
  }
};
```

- **You can write that:**


```
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { //code here }
};
```


--------------------------------------------------------------------

## :point_right: **for Loops**

- **for loop**
- **for in loop**
- **for of loop**

### **for loop**
   - _**Weakness**_:
         Having to keep track of: **Counter** , and **Exit Condition**.

### **for in loop**

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```
   - _**Adv**_:
         Eliminates **Counter** , and **Exit Condition**.
         
   - _**Weakness**_:
         Use of index to access values of the array.
         If you add any properties or methods to the array prototype they will appear in the loop.
     
```
         Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```
```
Prints:
0
1
2
3
4
5
6
7
8
9
function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}
```

### **for of loop**

   - _**Adv**_:
         Eliminates **Counter** , and **Exit Condition**.
         _Don't_ use **index** but it loops over each value without use of index.
         _only_ loop over the **values** in the object. So you don't worry about any new properties like in for in loop.
         Can be **stopped** at any time.
         
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
```

```
prints:
1
3
5
7
9
```

```
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

```
Prints:
0
1
2
3
4
5
6
7
8
9
```
:musical_note: **A good practice:** **_plural names_ for objects conatin values** and **_singular names_ for referencing individual values.**

```for (const button of buttons) {...}```

----------------------------------------------------------------------------

## :point_right: **Spread Operator**        

- **expand, or spread, iterable objects into multiple elements.**

```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);\\ 2 3 5 7 11 13 17 19 23 29
```

- **One of its udes is to concatenate 2 or more iterable objects.**

- Example: 
  - instead of using ```concat()``` an Array's method
  
```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
```

  - You can use spread operator
 
 
 ```
 const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);
```



