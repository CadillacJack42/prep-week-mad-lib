const inputs = document.getElementsByClassName('inputs')
const spans = document.getElementsByClassName('spans')

export const swapText = () => {
    for(let i=0; i<inputs.length-1; i++){
        spans[i].textContent = inputs[i].value;
    }
};