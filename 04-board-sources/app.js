const board = document.querySelector('#board')
const colors = [ '#DFFF00', '#FF7F50' , '#DE3163', '#40E0D0', '#CCCCFF', '#6495ED', '#9FE2BF', '#FFBF00' ]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.background = color
    element.borderRadius = `20%`
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}