# **HTML5 Sectioning Elements**

:exclamation: **Importance:**

- gives more semantic meaning to your pages, allowing computer programs to better understand your content, enhance accessibility, and SEO friendly.

```
<main>
```
  
  - **contain the main content for your web page.**
  - **content should be unique to the individual page.**
  - **content should NOT appear elsewhere on the site.**
  - **should NOT have any content that is repeated on multiple pages (logos, search boxes, footer links, etc.)**
  - **should NOT be placed within `<article>`, `<aside>`, `<header>`, `<footer>`, or `<nav>` elements.**
  - **Only ONE `<main>` element for each page.**


```
<article>
```

- **contain a piece of self-contained content that could be distributed outside the context of the page.**
- **like news articles, blog posts, or user comments.**
- **could be _Nested_ inside each other. And this means that the nested one relate to the outer one.**


```
<section>
```

- **contain a group of related content. **
- **content doesn’t necessarily need to make sense out of the context of the page.(the main diff from `<article>`).**
- **It’s advisable to use a heading element `<h1>` to `<h6>` to define the topic of the section.**
- **If you just need to group content together for styling purposes you should use `<div>` instead.**


```
<nav>
```

- **used to:** 
    - **contain a collection of links to external pages or sections within the current page.**
    - **table of contents.**
    - **blogroll.**
    - **It is better to mark up the links within list elment but this is not necessary with `<nav>`.**

```
<nav>
  <ul>
    <li><a href="#chapter-one">Chapter One</a>
    <li><a href="#chapter-two">Chapter Two</a>
    <li><a href="#chapter-three">Chapter Three</a>
  </ul>
</nav>
```


```
<aside>
```

- **for content that is not directly related to the content surronding it and could be considered separate.
- **like sidebars, `<nav>` elements.

```
<article>
  <header>
    <h1>Google Buys Nest</h1>
    <p>Posted at 11:34am 13th January 2014</p>
  </header>
  <p>...</p>
  <p>...</p>

  <aside>
    <h1>Google (GOOG)</h1>
    <p>Google was founded in 1998 by Larry Page and Sergey Brin. The company...</p>
  </aside>
</article>
```

```
<header>
```

- **represent the introductory content to an article or web page. **
- **contains:**
    - **a heading element like `<h1>`.** 
    - **some metadata that’s relevant to the content, such as the post date.**
    - **table of contents (within `<nav>`).**
- **associated with the nearest sectioning element.**


```
<footer>
```

- **represent information about a section such as _author, copyright information, or links to related web pages._**
- **associated with the nearest sectioning element.**


```
<address>
```

- **NOT for marking up postal address.**
- **represent contact information for an article or web page.**
- **like author’s website or their email address.**
- **often used within `<footer>`.

```
<article>
  <header>
    <h1>Google buys Nest</h1>
    <p>Posted at 11:34am 13th January 2014</p>
  </header>
  <p>...</p>
  <p>...</p>
  <footer>
    <address>
      By <a href="mailto:matt@example.com">Matt West</a>
    </address>
    <p>Copyright Matt West 2014</p>
  </footer>
</article>
```


:blue_book: Source: [How to Use The HTML5 Sectioning Elements](http://blog.teamtreehouse.com/use-html5-sectioning-elements).
