# Steps:

## Register a service worker:

- In the main.js:

```javascript
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('SW registered');
  });
}
```

- In this case you should have `sw.js` in the main directory. Here the scope of the service worker is the default scope (any thing in the same level or deeper than `sw.js` file level.

- To hijack a request with a custom response:

```javascript
//In sw.js file

self.addEventListener('fetch', function(event) {
    event.respondWith(
        new Response('<b>Any custom response</b>', {
            headers: {'Content-Type': 'text/html'}
        })
    );
});
```

- To hijack a request with a custom response depending on the request itself.

```javascript
// Here is a way to hijack a request depending on the file type of the request.
// We will  respond with a certain gif to every request with a jpg file type.

self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('.jpg')){
        event.respondWith(
            fetch('/imgs/evil.gif')
        );
    }  
});
```

- To hijack a request with a response to 404 not found or offline

```javascript
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).then(function(response) {
            if (response.status === 404) {
                //free download and personal use png from https://pngtree.com/freepng/404-error-vector_2871439.html
                return fetch('/img/404.png');
            }
            return response;
        }).catch(function () {
            return new Response('Perhaps, you are offline!');
        })
    );
});
```

