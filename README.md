# Cap Tweaks

## Scripts

### already-logged-in.js

- Sometimes when you refresh the page or use the browser's "Back" button, it locks you out claiming it "is open in another browser window / tab. Please close all browsers and try again."
- This script hides the relevant elements on the screen without breaking the event listeners which would otherwise trigger when the elements are missing.

### shift-down.js

- In FireFox, the carousel is too high so you can't click on buttons like "CREATE GENERAL FEEDBACK"
- This script shifts the carousel down so those buttons are accessible. Might also be an issue in Chrome/other browsers (I've not tested any other browsers though)