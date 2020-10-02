// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerCreator() {
    const theHeader = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')

    theHeader.appendChild(date)
    theHeader.appendChild(h1)
    theHeader.appendChild(temp)

    date.textContent = 'MARCH 28, 2020'
    h1.textContent = 'Lambda Times'
    temp.textContent = '98°'

    theHeader.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    return theHeader
}

console.log(headerCreator())


const headerPlacement = document.querySelector('.header-container')
headerPlacement.appendChild(headerCreator())


