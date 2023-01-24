window.setInterval(function () {
  var selectors = [
    // a#b  ID selector
    // a.b  Class selector
    // a[b] Attribute selector
    'dialog.cookie-policy',
    'div#awsccc-cb-content',
    'div#axeptio_overlay',
    'div#bw-cookie-banner',
    'div#cconsent-bar',
    'div#ccpaCookieBanner' ,
    'div#consent-page',
    'div#cookieContainer',
    'div#cookieWarningMessage',
    'div#didomi-host',
    'div#inform-cookies',
    'div#onetrust-consent-sdk',
    'div#orejime',
    'div#privacy-overlay',
    'div#privacy-overlay-banner',
    'div#qc-cmp2-container',
    'div#tarteaucitronRoot',
    'div#tc-privacy-wrapper',
    'div#twcc__mechanism',
    'div.consent-modal',
    'div.Cookie',
    'div.cookiebar',
    'div.Cookies_CookiesPopin',
    'div.jconfirm',
    'div.js-consent-banner',
    'div.lgpd_container',
    'div.pw-cookie-consent-v2',
    'div.pw-cookie-consent-v2-backdrop',
    'div.tc-privacy-wrapper',
    'div.wt-cli-cookie-bar-container',
    'div[aria-label="Avant d\'accéder à la recherche Google"]',
    'div[data-testid=cookie-policy-manage-dialog]',
    // 'div[role=dialog]',
    'eu-cookie-compliance',
    'div[data-testid=sheetDialog]',
    'div#layers',
    'div.md-consent',
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
    if (document.body.className === "tc-modal-open") {
      document.body.className = null;
    }
    document.body.style.setProperty('overflow', 'visible', 'important');
    document.head.parentElement.style.setProperty('overflow', 'visible', 'important');
  });
}, 1000);
