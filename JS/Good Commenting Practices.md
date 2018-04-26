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
