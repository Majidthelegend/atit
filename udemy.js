const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click', navToggle)

// boxes

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight /5 * 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }

    })
}