window.setInterval(function () {
  var selectors = [
    'dialog.cookie-policy',
    'div#bw-cookie-banner',
    'div#ccpaCookieBanner' ,
    'div#onetrust-consent-sdk',
    'div#privacy-overlay',
    'div#privacy-overlay-banner',
    'div#tc-privacy-wrapper',
    'div.tc-privacy-wrapper',
    'div.jconfirm',
    'div.lgpd_container',
    'div.pw-cookie-consent-v2',
    'div.pw-cookie-consent-v2-backdrop',
  ];
  selectors.forEach(selector => {
    var e = document.querySelector(selector);
    if (e) {
      if (e.parentElement.removeChild(e) === e) {
        console.log('cookie popup down!');
      } else {
        console.log('cookie popup failed');
      }
    }
  });
}, 1000);
