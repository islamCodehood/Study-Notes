# Object Iteration

### Table of Contents:

1. [Description](#description).
2. [Iterable Protocol](#iterable-protocol).

### Description:

- This will show us "**How to iterate over an object**".

### Iterable Protocol
- **Definition**: define and customize the iteration behavior of objects (which are not iterables). This means that now we the flexibility of defining and customizing this iteration behavior for objects.

- So for an object to be iterable ---must contain---> iterable method(define how object will be iterated).
- Our iterable method here is `[Symbol.iterator]()`
- `[Symbol.iterator]()` is a zero argument method ---returns---> iterator object (which is an object that conforms to iterator protocol).
