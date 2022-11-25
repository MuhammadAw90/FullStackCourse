//select the button
 var button = document.querySelector('button')
 var paragraph = document.querySelector('p')

 button.addEventListener('click', () => {
     paragraph.classList.toggle('hide') 
 })
