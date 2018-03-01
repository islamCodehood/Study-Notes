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

