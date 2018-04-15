# Pollyfills


## 1. for startsWith() method:

```javascript
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}
```
- Explanation:
  
  - We will start by showing how the method startsWidth() work.
  ```javascript
  "islam".startsWith("la", 2);//true
  ```
  `string.startsWith(searchString[, position]);`
  
  _searchString_ argument:
  
  The character(s) to be searched for at the start of this string or at the start point defined by `position` argument.
  
 _position_ argument:
 
 The position in this string at which to begin searching for searchString. It is optional and defaults to 0.
 
 -The conditional is checking if the method is on String object prototype (supported by the browser). If it is not on String object prototype (String.prototype.startsWith == undefined) ===> falsy so (!String.prototype.startsWith) will be true and excutes what code after it.
 
 -This code will declare a startWidth method to String prototype which value is an anonymous function with 2 arguments ( same like the original startsWidth method). position will be either the value we pass in calling the method of if not passes will be equal to 0 ( same like the original method. Default is 0) `position = position || 0;`
- Then the function returns substr() Method.
- `str.substr(start[, length])` 
   returns the part of a string between the start index and a number of characters after it.
- So the function will return true or false depending on wether the string value from `subStr(position, searchString.length) === searchString` or not
- So for example in
```javascript
  "islam".startsWith("la", 2);
  ```
this will return `subStr(2, 2) === la` start at position 2 which is character "l" to 2 characters which is "la" and this is eaqual to "la". So it returns true.

