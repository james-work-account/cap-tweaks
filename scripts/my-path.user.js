// ==UserScript==
// @name         MY Path
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://myconnect.capgemini.com/sap/bc/ui5_ui5/sap/zmypath/index.html*
// @grant        none
// ==/UserScript==

let bg_picture;
const bg_picture_backgroundImage = 'url("https://i.stack.imgur.com/dCeAX.jpg?s=328&g=1"), url("https://i.stack.imgur.com/dCeAX.jpg?s=328&g=1")';

(function() {
    'use strict';

    // Your code here...
    const repeating = setInterval(function() {
        bg_picture = document.getElementById("dashboard_view");
        if(bg_picture && (typeof bg_picture !== 'undefined') && (bg_picture.style.backgroundImage !== bg_picture_backgroundImage)) {
            bg_picture.style.backgroundImage = bg_picture_backgroundImage;
        }
    }, 5000);

    //setTimeout(() => { clearInterval(repeating); }, 10000);
})();
