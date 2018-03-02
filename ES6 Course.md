# **ES6 COURSE**

## **Names :**
- **ES6**
- **ES2015**
- **Harmony**

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
                                         - [ ] can't be declared in the same scope.

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
