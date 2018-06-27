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


