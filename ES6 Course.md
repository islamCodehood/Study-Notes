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
**It is a _GOOD PRACTICE_ to not using `var` any more.
