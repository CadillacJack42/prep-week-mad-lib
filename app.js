import { switcharoo } from "./hideSections.js";
import { swapText } from "./swapText.js";


// Grab all DOM ELements with a class of inputs 0-16 = spans, 17 = Submit Button
const inputs = document.getElementsByClassName('inputs')

// Grab all DOM ELements with a class of span
const spans = document.getElementsByClassName('spans')


// Add listener to Submit button. 
// If clicked, it will swap all the text fields and expose the completed mad-lib
inputs[17].addEventListener('click', () => {
    switcharoo();
    swapText();
})