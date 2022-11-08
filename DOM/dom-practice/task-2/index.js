const textInput = document.getElementById('textInput')
const outputSpans = document.querySelectorAll('span')
// "keyup" event runs after you press on the keyboard and lift your finger off
textInput.addEventListener('keyup', (event) => {

    for(let i of outputSpans)
    {
        i.textContent = event.target.value
    }    
})