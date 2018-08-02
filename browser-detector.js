import { PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * `browser-detector`
 * a component to detect the browser user is using
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BrowserDetector extends PolymerElement {
  static get is() { return 'browser-detector'; }
  static get properties() {
    return {
      browsername:{
        type:String,
        notify: true,
        reflectToAttribute:true,
      }

    };
  }

  connectedCallback() {
    super.connectedCallback();
      var browser = function() {
          // Return cached result if avalible, else get result then cache it.
          if (browser.prototype._cachedResult)
              return browser.prototype._cachedResult;

          // Opera 8.0+
          var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

          // Firefox 1.0+
          var isFirefox = typeof InstallTrigger !== 'undefined';

          // Safari 3.0+ "[object HTMLElementConstructor]"
          var isSafari = /constructor/i.test(window.HTMLElementConstructor) || (function (p) {return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

          // Internet Explorer 6-11
          var isIE = /*@cc_on!@*/false || !!document.documentMode;

          // Edge 20+
          var isEdge = !isIE && !!window.StyleMedia;

          // Chrome 1+
          var isChrome = !!window.chrome && !!window.chrome.webstore;

          // Blink engine detection
          var isBlink = (isChrome || isOpera) && !!window.CSS;

          return browser.prototype._cachedResult =
              isOpera ? 'Opera' :
              isFirefox ? 'Firefox' :
              isSafari ? 'Safari' :
              isChrome ? 'Chrome' :
              isIE ? 'IE' :
              isEdge ? 'Edge' :
              isBlink ? 'Blink' :
              "unknown";
      };
      this.browsername = browser(navigator);
  }
}

window.customElements.define(BrowserDetector.is, BrowserDetector);
