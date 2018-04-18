# HTML5 canvas

- Contents:
  1. [Description](#description).
  2. [Create a canvas](#create-a-canvas).
  3. [Loading Images Code](#loading-images-code).
  4. [Drawing Rectangle](#drawing-rectangle).
  5. [Clear Rectangle](#clear-rectangle).
  6. [Paths](#paths).
  7. [save() & restore()](#save--restore).
  8. [Moving Objects in a Canvas](#moving-objects-in-a-canvas).
  9. [Color Objects](#color-objects).
  10. [Draw Text](#draw-text).
  
  
  ## Description:
  - A Udacity HTML5 canvas course. [Here is its link](https://classroom.udacity.com/courses/ud292).
  - I will try to make notes on the  important things of the course.
  - The `<canvas>`  is just a container for drawing withthe use of JavaScript.
  
  
  
  ## Create a canvas:
  
  - HTML Syntax:  `<canvas id="canvas" width="500" height="500"></canvas>`
  - Attributes: `width` ==> Width of the canvas in CSS pixels (Default 150).
                `height` ==> Height of the canvas in CSS pixels (Default 150).
                
                
  - JavaScript Syntax: 
  ```javascript
  const canvas = document.getElementById('canvas');//to select the canvas element
  const ctx = canvas.getContext('2d');//to get the context of the 2d canvas. It can also be 3d but this course is about 2d.
  ```
  
  - In case we want an obaque canvas you can write:
  
  ```javascript
  const ctx = canvas.getContext('2d', {alpha: false});
  ```
  
  - After setting the context and assign it a variable `ctx`. We will use it to draw on the canvas like in the following examples.
  
  
  ## Loading Images Code
  
  - Using method drawImage()
  - It is called on the CanvasRenderingContext2D interface.
  - Syntax:
  
    It can contain either 3, 5, or 7 parameters:
    
  `ctx.drawImage(image, dx, dy);`
  
  `ctx.drawImage(image, dx, dy, dWidth, dHeight);`
  
  `ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);`
  
  Parameters:
  
  `image`: the image url.
  
  `dx`: the x coordinate of image.
  
  `dy`: the y coordinate of image.
  
  `sx`: The x coordinate where to start clipping.
  
  `sy`: The y coordinate where to start clipping.
  
  `dWidth`: The width to draw the image in the destination canvas. This allows _scaling_ of the drawn image. If not specified, the image is NOT scaled in width when drawn.
  
  `dHeight`: The height to draw the image in the destination canvas. This allows _scaling_ of the drawn image. If not specified, the image is not scaled in height when drawn.
  
  `sWidth`: The width of the clipped image.
  
  `sHeight`: The height of the clipped image.
  
  
  - Example:
```html
<canvas id="canvas" width="300" height="350"></canvas>
<script>
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = '/*imageUrl*/';
  image.onload = function() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);//the width and height of the image will be the canvas's width and height.
  }
</script>  
```
  
  ## Drawing Rectangle:
  
  - Syntax:
  ```javascript
  ctx.fillRect(x,y,width,height);//draws a colored rectangular.
  ```
  ```javascript
  ctx.strokeRect(x,y,width,height);//draws an empty rectangular.
  ```
  
  
  ## Clear Rectangle:
  
  - Synatx:
  ```javascript
  ctx.clearRect(x, y, width, height);
  ```
  
 
  
  ## Paths:
  
  - This [link](http://www.w3.org/TR/2dcontext/#building-paths) explains it in details.
  
  
  
 ## save() & restore():
 
 - `save()`:
  [o] saves the most current state to be called after with `restore()`
  [o] If called in the before a current state it saves the default on. An example from MDN(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save#Examples).
  [o] Syntax:
  ```javascript
  ctx.save();//called after the state was declared.
  ```
  
 - `restore()`:
  [o] restores the most recently saved canvas state.
  [o] Syntax:
  ```javascript
  ctx.restore();//called before drawing the object we want to restore the state on.
  ```
  
  
  ## Moving Objects in a Canvas:
  
  `ctx.scale(x, y);`
  
  `ctx.translate(x, y);`
  
  `ctx.rotate(angleRadians);`: anglaeRadian = degrees * (Math.PI/180)
  
  - Order of operations: 1. scale
                         2. rotate
                         3. translate
          
          
  ## Color Objects:
  
  `ctx.strokeStyle = "someColor";//color can be a named color (140 named color in HTML), or a hexadecimal color.`
  
  `ctx.fillStyle = "someColor";`
  
  `ctx.fill();
  //can be used for example if we draw a rectangle by rect() instead of fillRect(), or to color path with the fillStyle color specified.`
  
  
  ## Draw Text:
  
  `ctx.strokeText(x, y, [optional max-width]);`
  
  `ctx.fillText(x, y, [optional max-width]);`
  
  - You can combine both `strokeText` and `fillText`
  
  -Here is the [meme-maker](https://github.com/Islam888/Study-Notes/blob/master/HTML/meme-maker.html) exercise app by udacity.
  
  
  
