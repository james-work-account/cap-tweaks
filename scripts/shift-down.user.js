// ==UserScript==
// @name         Shift Elements Down
// @namespace    james-work-account
// @version      0.1
// @description  In FireFox, the carousel is too high so you can't click on buttons like "CREATE GENERAL FEEDBACK" - this script shifts the carousel down so those buttons are accessible. Might also be an issue in Chrome/other browsers (I've not tested any other browsers though)
// @author       James Whiteley
// @match        https://myconnect.capgemini.com/sap/bc/ui5_ui5/sap/zmypath/index.html*
// @updateURL    https://github.com/james-work-account/mypath-tweaks/raw/master/scripts/shift-down.user.js
// @downloadURL  https://github.com/james-work-account/mypath-tweaks/raw/master/scripts/shift-down.user.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var style = document.createElement('style');
  style.innerHTML = `
#__jsview0 {
  padding-top: 0;
  margin-top: 140px;
}
`;
  document.head.appendChild(style);
})();
