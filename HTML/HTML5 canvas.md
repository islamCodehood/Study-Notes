# HTML5 canvas

- Contents:
  1. [Description](#description).
  2. [Create a canvas](#create-a-canvas).
  3. [Loading Images Code](#loading-image-code).
  4. [Save an image](#save-an-image).
  5. [Drawing Rectangular](#drawing-rectangular).
  
  
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
  
  
  
  
