function rgba() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = Math.floor(Math.random() * 255)
    let rgba = `${r},${g},${b},${a}`
    return rgba
}

const newColor = rgba()

const Body = document.body

const sec = document.getElementById('seccond')

const Button = document.getElementById('button')
Button.addEventListener('click', () => {
    console.log('clicked bud')

    Body.style.backgroundColor = `rgba(${rgba()})`

    sec.innerText = `The color is ${Body.style.backgroundColor} `

})