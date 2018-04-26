# Good Commenting Practices

### Contents:

- [Source](#source).
- [The 5 tips](#the-5-tips).
  1. [Comments are not subtitles](#comments-are-not-subtitles).
  2. 


## Source:

- https://improvingsoftware.com/2011/06/27/5-best-practices-for-commenting-your-code/


## The 5 tips:

### 1. Comments are not subtitles

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


### 2. Comments are not an art project
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
 
 
 ### 3. Header Blocks
 
 - They are enablers for badly named objects/methods. Just to think that he reader will understand what the object/method do after reading the header, excuse you not to put extra work to find a good descriptive names.
 
- They never get updated. And also rarely get read. So why wasting your time with something won't help.


### 4. Comments are not source control

_I am trying to understand this part. If anyone could contribute, it is welcomed._


### 5. Comments are a code smell

- "Things generally need signs because their affordances have failed." This means that "**when you add a comment you are admitting that you have written code that doesn’t communicate its purpose well.**".
- Whenever you think, “This code needs a comment” follow that thought with, “How could I modify the code so its purpose is obvious?”
Talk with your code, not your comments.
- One of the ways to do so is to Use meaningful identifiers (even if they are single use).
```
// Before
 // Calculate monkey's arm length
 // using its height and the magic monkey arm ratio
 double length = h * 1.845; //magic numbers are EVIL!
 
// After - No comment required
double armLength = height * MONKEY_ARM_HEIGHT_RATIO;
```
