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

** _Weakness_:**
    - Having to keep track of:
    
     the counter
     
     exit condition
