const maxCount = document.querySelector('.life__slider_inner').children.length
const blockToMove = document.querySelector('.life__slider_inner')
let sliderWidth = document.querySelector('.life__slider').clientWidth
const buttonPrev = document.querySelector('.btn_prev')
const buttonNext = document.querySelector('.btn_next')
const pseudo = document.querySelectorAll('.life__pseudo_item')
let count = 0;

const zero = document.querySelector('.life__pseudo_item.zero')
const first = document.querySelector('.life__pseudo_item.first')
const second = document.querySelector('.life__pseudo_item.second')
const third = document.querySelector('.life__pseudo_item.third')
const fourth = document.querySelector('.life__pseudo_item.fourth')

const interval = setInterval(component, 3000);


window.addEventListener('resize', () => {
    console.log(window.innerWidth)
    createPseudo()
    activateSlider()
    sliderWidth = document.querySelector('.life__slider').clientWidth
})


activateSlider()
createPseudo()
buttonsLogic()
watch()

function activateSlider(){
    if(window. innerWidth >= 640){
        clearInterval(interval)
    }
}

function createPseudo(){
    for(let i = 0; i < pseudo.length; i++){
        const spaces = maxCount - 1
        const pseudoWidth = (sliderWidth - spaces) / maxCount
        pseudo[i].style.width = pseudoWidth + 'px'
    }
}

function component() {
    if (count >= maxCount - 1) {
        count = -1
    }
    count++;
    blockToMove.style.transform = 'translate(-' + count * sliderWidth + 'px, 0)';
    watch()
    blockToMove.style.transition = '.7s';
    if (count >= maxCount - 1) {
        count = -1
    }
}

function buttonsLogic(){
    buttonNext.addEventListener('click', () => {
    component()
    })
    buttonPrev.addEventListener('click', () => {
        if (count === -1) {
            count = maxCount - 1
        }
        count--;
        if (count < 0) {
            count = maxCount - 1
        }
        blockToMove.style.transform = 'translate(-' + count * sliderWidth + 'px, 0)';
        watch()
        blockToMove.style.transition = '.7s';
    })
}

function watch(){
    switch (count) {
        case 0 : activatePseudo(0);
            break;
        case 1 : activatePseudo(1);
            break;
        case 2 : activatePseudo(2);
            break;
        case 3 : activatePseudo(3);
            break;
        case 4 : activatePseudo(4);
            break;
    }
}

function activatePseudo(arg){
    const pseudoElements = [zero, first, second, third, fourth]
    for(let i = 0; i < pseudoElements.length; i ++){
        pseudoElements[i].style.backgroundColor = '#000000'
        pseudoElements[i].style.opacity = '0.1'
    }
    pseudoElements[arg].style.backgroundColor = '#A30C33'
    pseudoElements[arg].style.opacity = '1'
    pseudoElements[arg].style.transition = '.75s'
}