# Good Commenting Practices

### Contents:

- [Source](#source).
- [The 5 tips](#the-5-tips).
  1. [Comments are not subtitles](#comments-are-not-subtitles).
  2. 


## Source:

- https://improvingsoftware.com/2011/06/27/5-best-practices-for-commenting-your-code/


## The 5 tips:

1. Comments are not subtitles

- You are writting comments for both the future you, and others programmers who would be building over your code or maintain it.
- So no need to write every simple detail. As not far from now you will read code as your native language.
- Example: 
```javascript
// Loop through all bananas in the bunch
foreach(banana b in bunch) {
    monkey.eat(b);  //make the monkey eat one banana
}
```
- For people who are used to write pseudo code first before the real code, don't forget to replace pseudo with real code and not just add it to the former.
- Exceptions:
  1. Code examples used to teach a concept or new programming language.
  2. Programming languages that aren’t human readable (Assembly, Perl).


2. Comments are not an art project
```
  /*
   _     _      _     _      _     _      _     _      _     _      _     _
  (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)
   / ._. \      / ._. \      / ._. \      / ._. \      / ._. \      / ._. \
 __\( Y )/__  __\( Y )/__  __\( Y )/__  __\( Y )/__  __\( Y )/__  __\( Y )/__
(_.-/'-'\-._)(_.-/'-'\-._)(_.-/'-'\-._)(_.-/'-'\-._)(_.-/'-'\-._)(_.-/'-'\-._)
   || M ||      || O ||      || N ||      || K ||      || E ||      || Y ||
 _.' `-' '._  _.' `-' '._  _.' `-' '._  _.' `-' '._  _.' `-' '._  _.' `-' '._
(.-./`-'\.-.)(.-./`-'\.-.)(.-./`-'\.-.)(.-./`-'\.-.)(.-./`-'\.-.)(.-./`-'\.-.)
 `-'     `-'  `-'     `-'  `-'     `-'  `-'     `-'  `-'     `-'  `-'     `-'
 
                 -It's Monkey Business Time! (Version 1.5)
*/
```
```
1
2
3
4
5
6
7
+------------------------------------------------------------+
 | Module Name: classMonkey                                   |
 | Module Purpose: emulate a monkey                           |
 | Inputs: Bananas                                              |
 | Outputs: Grunts                                            |
 | Throws: Poop                                               |
 +------------------------------------------------------------+
 ```
 
 - The first example is very silly to do in your comments and you are not do silly things, are you? 
 - The second example will get developers tired while they are maintaing your code just to try to fix the unsymmetric border. Because they like consistency and every other method in the project has one.
 
 
