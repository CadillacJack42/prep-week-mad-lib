const first = document.getElementById('display-first')
const second = document.getElementById('display-second')
const introTitle = document.getElementById('intro-title') 
// const btn = document.getElementById('submit-btn')

// btn.addEventListener('click', () => {
//     first.style.display = 'none'
//     second.style.display = 'block'
// })

export const switcharoo = () => {
    first.style.display = 'none'
    second.style.display = 'block'
    introTitle.style.color = 'black'
};