window.setInterval(function () {
  var selectors = [
    // a#b  ID selector
    // a.b  Class selector
    // a[b] Attribute selector
    'dialog.cookie-policy',
    'div#bw-cookie-banner',
    'div#cconsent-bar',
    'div#ccpaCookieBanner' ,
    'div#consent-page',
    'div#cookieContainer',
    'div#cookieWarningMessage',
    'div#didomi-host',
    'div#onetrust-consent-sdk',
    'div#orejime',
    'div#privacy-overlay',
    'div#privacy-overlay-banner',
    'div#tarteaucitronRoot',
    'div#tc-privacy-wrapper',
    'div.consent-modal',
    'div.Cookies_CookiesPopin',
    'div.jconfirm',
    'div.lgpd_container',
    'div.pw-cookie-consent-v2',
    'div.pw-cookie-consent-v2-backdrop',
    'div.tc-privacy-wrapper',
    'div.wt-cli-cookie-bar-container',
    'div[aria-label="Avant d\'accéder à la recherche Google"]',
  ];
  selectors.forEach(selector => {
    var e = document.querySelector(selector);
    if (e) {
      if (e.parentElement.removeChild(e) === e) {
        document.body.style.overflow = null;
        console.log('cookie popup down!');
      } else {
        console.log('cookie popup failed');
      }
    }
  });
}, 1000);
