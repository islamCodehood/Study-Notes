# Reference Counting Garbage Collection

- Description:
    _This is just an explanation of a garbage collection algorithm presented in_ [MDN-Garbage Collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection).
- Definition: One of algorithms of JS Grabage Collection Algorithms.
- The most naive Garbage Collection algorithm.
- It reduces the definition of "an object is not needed anymore so Garbage collect it" to "an object has no other object referencing to it so Garbage collect it". 
- MDN Example with a more clear explanation:

```javascript
var o = { 
  a: {
    b: 2
  }
}; 
```
2 objects are created:

```javascript
{ 
  a: {
    b: 2
  }
}
```
And 
```javascript
{
    b: 2
  }
```
The first one is referenced by being assigned to variable `o`. The second is referenced by the first one as a property of it.

```javascript
var o2 = o; 
```
Now the first object has a second reference `o2`
```javascript
o = 1;     
```
But now one of its references `o` variable are being re assigned to a different value. So the first object now has one reference `o2`.
```javascript
var oa = o2.a; 
```
The second object now has a reference `oa` by assigning the `o2` object `a` property to `oa`
```javascript
o2 = 'yo';
```
Now the first object loses its last reference `o2`. So it can be garbage collected.
```javascript
oa = null; 
```
Now the second object loses its reference `oa`. So it can also be garbage collected.

           
