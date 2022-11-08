const products = ['Milk', 'Eggs', 'Cornflex']
const productsList = document.getElementById('productsList')
const myTimeout = setTimeout(1000)

 for (let i in products)
 {
     const listItem = document.createElement('li')

     listItem.textContent = products[i]

     myStopFunction();

     productsList.appendChild(listItem)

 }

 function myStopFunction() {
     clearTimeout(myTimeout);
   }