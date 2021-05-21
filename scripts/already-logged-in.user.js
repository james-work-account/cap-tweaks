// ==UserScript==
// @name         Fix Already Logged In
// @namespace    james-work-account
// @version      0.3
// @description  Sometimes when you refresh the page or use the browser's "Back" button, it locks you out claiming it "is open in another browser window / tab. Please close all browsers and try again." - this script fixes this.
// @author       James Whiteley
// @match        https://myconnect.capgemini.com/sap/bc/ui5_ui5/sap/zmypath/index.html*
// @updateURL    https://github.com/james-work-account/cap-tweaks/raw/master/scripts/already-logged-in.user.js
// @downloadURL  https://github.com/james-work-account/cap-tweaks/raw/master/scripts/already-logged-in.user.js
// @grant        none
// ==/UserScript==

let popupBlock;

function hide(element) {
    // it's easier to just shove this behind the other elements instead of trying to remove it
    if(element) element.style.zIndex = -1;
}

function popupBlockIsPresent() {
  return typeof popupBlock !== "undefined" && popupBlock !== null
}

function removeLoggedInPopups() {
    if(popupBlockIsPresent()) popupBlock.classList.remove("sapUiBLy");
    const boxes = Array.from(document.querySelectorAll("#__mbox0"))
    for(const box of boxes) {
        hide(box);
    }
    hide(document.getElementById("sap-ui-static"));
    document.querySelector("html").classList.remove("sapUiBLyBack");
}

(function() {
    'use strict';
    const repeating = setInterval(function() {
        popupBlock = document.getElementById("sap-ui-blocklayer-popup");
        if(popupBlockIsPresent()) {
            removeLoggedInPopups();
        }
    }, 1000);

    // there's an event listener somewhere that adds the popup back if the page is clicked on
    // to counter this, here's an event listener on the body which re-hides the popup when the document body is clicked
    // wait 10ms in case it doesn't pop up immediately
    document.body.addEventListener("click", (e) => setTimeout(removeLoggedInPopups, 10));
})();
