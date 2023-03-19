const palette = document.querySelector('#game-board')

const newDiv = document.createElement('div')
newDiv.style.height = '10'
newDiv.style.width = '10'
newDiv.style.background = 'red'
newDiv.style.display = 'inline-block'
newDiv.style.position = 'relative'
newDiv.style.left = '0'
palette.append(newDiv)

console.log(document)



const eventLoop = () => {
    newDiv.style.left = parseInt(newDiv.style.left) + 1
}

// setInterval(eventLoop, 10)