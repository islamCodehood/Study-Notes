# **Responsive Images**

A course by [Udacity](https://classroom.udacity.com/courses/ud882).

----------------------------------------------------------------------------------------------

## **Introduction**

- More than 60% of Bytes per page is images.

<figure>
<img src="http://chart.googleapis.com/chart?chs=400x225&cht=p&chco=007099&chd=t:1556,47,77,386,86,175,10&chds=0,1556&chdlp=b&chdl=total%202350%20kB&chl=Images+-+1556+kB%7CHTML+-+47+kB%7CStylesheets+-+77+kB%7CScripts+-+386+kB%7CFonts+-+86+kB%7CVideo+-+175+kB%7COther+-+10+kB&chma=|5&chtt=Average+Bytes+per+Page+by+Content+Type">
  <figcaption>
    Average Bytes Per Page Per Content Type. A diagram from <a href="http://httparchive.org">http://httparchive.org</a>.
  </figcaption>
<figure>


## **Bits & Pixels**

#### bits = pixels * bits per pixel (bpp)


## **Relative Sizing**

- **Fixed image size in for example pixels would create Unresposive image that will not resize.**
- **If you make `width : 100%;` It will resize as broswer resize but it will lead to pixelation of the image when it resizes to larger of its natural width.**
- **But if you make `max-width: 100%` It will resize to a maximum width of its natural width only and will not pixelate.**
- **If you want 2 images to fit side by side you can change to `max-width: 50%;`.**

## **Quiz: calc()**

- **Using `Calc` is very important when we want the size (width for example) to take the remaining area after a fixed area is taken (for a maring for example).**
**_This is a [quiz](https://classroom.udacity.com/courses/ud882/lessons/3520939843/concepts/37391188270923)._**
