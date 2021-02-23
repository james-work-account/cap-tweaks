// ==UserScript==
// @name         Fix Already Logged In
// @namespace    james-work-account
// @version      0.2
// @description  Sometimes when you refresh the page or use the browser's "Back" button, it locks you out claiming it "is open in another browser window / tab. Please close all browsers and try again." - this script fixes this.
// @author       James Whiteley
// @match        https://myconnect.capgemini.com/sap/bc/ui5_ui5/sap/zmypath/index.html*
// @updateURL    https://github.com/james-work-account/cap-tweaks/raw/master/scripts/already-logged-in.user.js
// @downloadURL  https://github.com/james-work-account/cap-tweaks/raw/master/scripts/already-logged-in.user.js
// @grant        none
// ==/UserScript==

let popupBlock;
const removeLoggedInPopups = () => {
    popupBlock.classList.remove("sapUiBLy");
    const boxes = Array.from(document.querySelectorAll("#__mbox0"))
    for(const box of boxes) {
        box.style.border = "";
        box.style.display = "none";
        box.style.height = 0;
        box.style.width = 0;
        box.innerHTML = "";
    }
    document.getElementById("sap-ui-static").innerHTML = "";
    document.querySelector("html").classList.remove("sapUiBLyBack");
}

(function() {
    'use strict';
    const repeating = setInterval(function() {
        popupBlock = document.getElementById("sap-ui-blocklayer-popup");
        if(typeof popupBlock !== "undefined" && popupBlock !== null) {
            removeLoggedInPopups();
            clearInterval(repeating);
        }
    }, 100);

    // stop after 10 seconds if the element never exists - it is futile (the issue isn't there in the first place or something else went wrong with the script)
    setTimeout(() => { clearInterval(repeating); }, 10000);
})();
